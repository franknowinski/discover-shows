class Concert < ActiveRecord::Base
  belongs_to :artist
  has_many :upcoming_concerts
end
