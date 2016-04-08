Rails.application.routes.draw do
  root 'application#angular'
  get '/auth/spotify/callback', to: 'user#spotify'
  get '/user', to: 'user#user'
  post '/zipcode', to: 'user#zipcode'

  resources :artists, only: [:index, :show]
end
