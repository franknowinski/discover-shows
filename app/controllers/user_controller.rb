class UserController < ApplicationController
  before_action :logged_in?, only: [:user]
  before_action :set_user, only: [:zipcode]

  def spotify
    user = User.from_omniauth(request.env['omniauth.auth'])
    Artist.assign_artists(user)
    session[:id] = user.id
    redirect_to '#/artists'
  end

  def user
    render json: @current_user
  end

  def destroy
    session.clear
    render nothing: true
  end

  private

  def set_user
    @current_user = User.find(params[:user_id]);
  end
end
