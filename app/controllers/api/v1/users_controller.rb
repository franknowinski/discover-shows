class Api::V1::UsersController < ApplicationController
  before_action :logged_in?, only: [:show]
  before_filter :protect_from_forgery, :except => [:show, :destroy]

  def show
    render json: @current_user
  end

  def destroy
    # binding.pry
    session.clear
    head :no_content
    # redirect_to '#/login'
    # render nothing: true
  end
end
