class UserController < ApplicationController

  def spotify
    # User.from_omniauth(RSpotify::User.new(request.env['omniauth.auth']))
    User.from_omniauth(request.env['omniauth.auth'])
  end
end
