class ArtistsController < ApplicationController
  before_action :logged_in?

  def index
    render json: @current_user.artists
  end

  def show
    render json: Artist.find(params[:id])
  end
end
