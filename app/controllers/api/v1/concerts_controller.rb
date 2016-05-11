class Api::V1::ConcertsController < ApplicationController
  before_action :logged_in?, only: [:index]

  def index
    render json: @current_user.artists.map(&:concerts).flatten
  end
end
