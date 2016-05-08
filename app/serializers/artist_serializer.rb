class ArtistSerializer < ActiveModel::Serializer
  attributes :id, :name, :popularity, :artist_id, :image_url
  has_many :concerts, serializer: ConcertSerializer
  has_many :songs, serializer: SongSerializer
end
