class User < ActiveRecord::Base
  has_many :artists
  has_many :upcoming_concerts, dependent: :destroy
  has_many :concerts, through: :upcoming_concerts

  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.email = auth.info.email
      user.name = auth.info.display_name
      user.token = auth.credentials.token
      Artist.assign_artists(user)
    end
  end

  def top_artists
    # http = Curl.get("https://api.spotify.com/v1/me/top/artists?limit=25") do |http|
    #   http.headers['Accept'] = 'application/json',
    #   http.headers['Authorization'] = "Bearer #{token}"
    # end.body_str
    #
    # JSON.parse(http)
  end
end
