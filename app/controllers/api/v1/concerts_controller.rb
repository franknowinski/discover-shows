class Api::V1::ConcertsController < ApplicationController
  before_action :logged_in?, only: [:show]
  before_action :set_concerts, only: [:index]

  def index
    render json: @concerts
  end

  def show
    render json: @current_user.artists.map(&:concerts).flatten
  end

  private

  def set_concerts
    @concerts = Artist.find(params[:artist_id]).concerts
  end
end
