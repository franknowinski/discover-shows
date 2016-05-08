class SongSerializer < ActiveModel::Serializer
  attributes :id, :name, :album, :song_url, :artist_id
end
