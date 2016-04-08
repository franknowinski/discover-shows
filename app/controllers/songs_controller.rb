class SongsController < ApplicationController
  before_action :set_songs, only: [:index]

  def index
    render json: @songs
  end

  private
  def set_songs
    @songs = Artist.find(params[:artist_id]).songs
  end
end
