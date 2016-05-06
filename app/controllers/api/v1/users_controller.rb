class Api::V1::UsersController < ApplicationController
  before_action :logged_in?, only: [:show]

  def show
    render json: @current_user
  end

  def destroy
    session.clear
    render nothing: true
  end
end
