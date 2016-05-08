class ConcertSerializer < ActiveModel::Serializer
  attributes :id, :title, :name, :city, :state, :status, :ticket_url, :artist_id, :date
end
