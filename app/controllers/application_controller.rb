class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :null_session
  protect_from_forgery
  after_filter :set_csrf_cookie_for_ng

  def angular
    render 'layouts/application'
  end

  def spotify
    session[:id] = User.from_omniauth(request.env['omniauth.auth']).id
    logged_in?
    redirect_to "#/artists/#{@current_user.artists.first.id}"
  end

  def logged_in?
    @current_user ||= User.find(session[:id])
  end

  def set_csrf_cookie_for_ng
    cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?
  end

  protected

  def verified_request?
    super || valid_authenticity_token?(session, request.headers['X-XSRF-TOKEN'])
  end

  def verified_request?
    super || form_authenticity_token == request.headers['X-XSRF-TOKEN']
  end
end
