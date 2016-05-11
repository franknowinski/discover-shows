class Api::V1::UpcomingConcertsController < ApplicationController
  before_action :logged_in?, only: [:index]
  before_action :set_user, only: [:create, :destroy]
  before_action :set_concert, only: [:create]

  def index
    render json: @current_user.upcoming_concerts
  end

  def create
    @current_user.upcoming_concerts.create(concert_id: @concert.id)
    head :no_content
  end

  def destroy
    # @current_user.upcoming_concerts.destroy(params[:id])
    render json: @current_user.upcoming_concerts.destroy(params[:id])
    # head :no_content
  end

  private

  def set_user
    @current_user = User.find(params[:user_id])
  end

  def set_concert
    @concert = Concert.find(params[:upcoming_concert][:concert_id])
  end
end
