class Artist < ActiveRecord::Base
  # belongs_to :user
  has_many :users
  has_many :concerts

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
