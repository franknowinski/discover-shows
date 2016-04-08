class UserController < ApplicationController
  before_action :logged_in?, only: [:user]
  before_action :load_user, only: [:zipcode]

  def spotify
    @user = User.from_omniauth(request.env['omniauth.auth'])
    @user.assign_artists
    session[:id] = @user.id
  end

  def user
    render json: @current_user
  end

  def zipcode
    @current_user.update(zip_code: params[:zip_code])
  end

  private

  def load_user
    @current_user = User.find(params[:user_id]);
  end
end
