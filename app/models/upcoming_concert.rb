class UpcomingConcert < ActiveRecord::Base
  belongs_to :user
  belongs_to :concert
  has_one :artist, through: :concert
end
