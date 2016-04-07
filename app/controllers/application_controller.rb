class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def angular
    render 'layouts/application'
  end

  def logged_in?
    @current_user ||= User.find(session[:id])
  end
end
