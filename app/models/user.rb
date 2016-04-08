class User < ActiveRecord::Base
  has_many :artists

  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.provider = auth.provider
      user.uid = auth.uid
      user.email = auth.info.email
      user.name = auth.info.display_name
      user.token = auth.credentials.token
    end
  end

  def top_artists
    JSON.parse(`curl -X GET "https://api.spotify.com/v1/me/top/artists?limit=5" -H "Accept: application/json" -H "Authorization: Bearer #{self.token}"`)
  end

  def assign_artists
    top_artists["items"].each do |artist|
      a = Artist.find_or_create_by(name: artist["name"], popularity: artist["popularity"], artist_id: artist["id"])
      self.artists << a
    end
  end
  # def jam
  #   binding.pry
  #   `curl -X GET "http://api.jambase.com/artists?name=skrillex&page=0&api_key=532y74tzngj57shc64z3729m"`
  # end
end
