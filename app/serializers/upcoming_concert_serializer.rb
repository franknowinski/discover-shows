class UpcomingConcertSerializer < ActiveModel::Serializer
  attributes :id
  has_one :concert, serializer: ConcertSerializer
  has_one :artist, serailzer: ArtistSerializer
end
