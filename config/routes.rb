Rails.application.routes.draw do
  root 'application#angular'
  get '/auth/spotify/callback', to: 'user#spotify'
end
