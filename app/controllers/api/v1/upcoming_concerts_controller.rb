class Api::V1::UpcomingConcertsController < ApplicationController
  # before_action :set_user, only: [:index, :create, :destroy]
  before_action :set_concert, only: [:create]

  def index
    render json: @current_user.upcoming_concerts.map(&:concert)
  end

  def create
    @current_user.upcoming_concerts.create(concert_id: @concert.id)
    render nothing: true
  end

  def destroy
    upcoming_concert = @current_user.upcoming_concerts.where(concert_id: params[:id]).first
    @current_user.upcoming_concerts.find(upcoming_concert.id).destroy
    render nothing: true
  end

  private

  # def set_user
  #   @current_user = User.find(params[:user_id]);
  # end

  def set_concert
    @concert = Concert.find(params[:upcoming_concert][:concert_id])
  end
end
