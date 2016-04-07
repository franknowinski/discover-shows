class UserController < ApplicationController

  def spotify
    @user = User.from_omniauth(request.env['omniauth.auth'])
    @user.assign_artists
    session[:id] = @user.id

    redirect_to artists_path
  end
end
