class Artist < ActiveRecord::Base
  has_many :songs
  has_many :concerts

  def self.assign_artists(user)
    user.top_artists["items"].each do |a|
      artist = self.find_or_create_by(name: a["name"], popularity: a["popularity"], artist_id: a["id"])
      artist.top_tracks
      user.artists << artist
    end
  end

  def top_tracks
    get_tracks["tracks"].each do |track|
      songs.new(name: track["name"], album: track["album"]["name"])
    end
  end

  def get_tracks
    uri = URI.parse("https://api.spotify.com/v1/artists/#{self.artist_id}/top-tracks?country=SE")
    response = Net::HTTP.get_response(uri).body
    JSON.parse(response)
  end

  def find_concerts(artist)
    get_jam_id(artist)
    get_concerts
  end

  def get_jam_id(artist)
    uri = URI.parse("http://api.jambase.com/artists?name=#{artist}&page=0&api_key=2sn59tm4crjszvtvba3c7w4f")
    response = Net::HTTP.get_response(uri).body
    self.jam_id = JSON.parse(response)["Artists"].first["Id"]
  end

  def get_concerts
    uri = URI.parse("http://api.jambase.com/events?artistId=39941&zipCode=10921&page=0&api_key=2sn59tm4crjszvtvba3c7w4f")
    response = Net::HTTP.get_response(uri).body
    JSON.parse(response)
  end
end
