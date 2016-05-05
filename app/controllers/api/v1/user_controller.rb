class Api::V1::UserController < ApplicationController
  before_action :logged_in?, only: [:user]

  def spotify
    user = User.from_omniauth(request.env['omniauth.auth'])
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
end
