Rails.application.routes.draw do
  root 'application#angular'
  get 'auth/spotify/callback', to: 'application#spotify'

  namespace :api, defaults:{format: :json} do
    namespace :v1 do

      resources :users, only: [:destroy] do
        resources :upcoming_concerts, only: [:index, :create, :destroy]
        get 'all-concerts', to: 'concerts#show'
      end

      resources :artists, only: [:index, :show]
      resource :users, only: [:show]
      get 'upcoming_concerts/create'
      # do
      #   resources :songs, only: [:index]
      #   resources :concerts, only: [:index]
      # end
    end
  end
end
