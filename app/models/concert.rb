class Concert < ActiveRecord::Base
  belongs_to :artist
  has_many :upcoming_concerts
  has_many :users, through: :upcoming_concerts
end
