class ArtistsController < ApplicationController
  before_action :logged_in?, only: [:index]
  before_action :set_artist, only: [:show, :songs]

  def index
    render json: @current_user.artists
  end

  def show
    render json: @artist
  end

  private

  def set_artist
    @artist = Artist.find(params[:id])
  end
end
