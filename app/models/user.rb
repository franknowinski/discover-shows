class User < ActiveRecord::Base
  has_many :artists
  has_many :upcoming_concerts
  has_many :concerts, through: :upcoming_concerts

  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.provider = auth.provider
      user.uid = auth.uid
      user.email = auth.info.email
      user.name = auth.info.display_name
      user.token = auth.credentials.token
      Artist.assign_artists(user)
    end
  end

  def top_artists
    JSON.parse(`curl -X GET "https://api.spotify.com/v1/me/top/artists?limit=10" -H "Accept: application/json" -H "Authorization: Bearer #{token}"`)
  end
end
