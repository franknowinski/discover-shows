class UserController < ApplicationController

  def spotify
    User.from_omniauth(request.env['omniauth.auth'])
  end
end
