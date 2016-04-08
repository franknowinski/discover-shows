Rails.application.routes.draw do
  root 'application#angular'
  get '/auth/spotify/callback', to: 'user#spotify'
  get '/user', to: 'user#user'
  post '/zipcode', to: 'user#zipcode'
  resources :user, only: [:destroy]

  resources :artists, only: [:index, :show] do
    resources :songs, only: [:index]
  end
end
