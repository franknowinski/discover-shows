class ConcertsController < ApplicationController
  before_action :set_concerts, only: [:index]
  def index
    render json: @concerts
  end

  private

  def set_concerts
    @concerts = Artist.find(params[:artist_id]).concerts
  end
end
