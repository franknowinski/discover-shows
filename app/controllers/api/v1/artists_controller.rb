class Api::V1::ArtistsController < ApplicationController
  before_action :logged_in?, only: [:index]
  before_action :set_artist, only: [:show, :update]

  def index
    render json: @current_user.artists
  end

  def show
    render json: @artist
  end

  def update
    @artist.update(artist_params)
    head :no_content
  end

  private

  def artist_params
    params.require(:artist).permit(:popularity)
  end

  def set_artist
    @artist = Artist.find(params[:id])
  end
end
