Rails.application.routes.draw do
  root 'application#angular'
  get 'auth/spotify/callback', to: 'application#spotify'

  namespace :api, defaults:{format: :json} do
    namespace :v1 do
      get 'upcoming_concerts/create'

      get 'user', to: 'user#user'
      post 'zipcode', to: 'user#zipcode'

      resources :user, only: [:destroy] do
        resources :upcoming_concerts, only: [:index, :create, :destroy]
        get 'all-concerts', to: 'concerts#show'
      end

      resources :artists, only: [:index, :show] do
        resources :songs, only: [:index]
        resources :concerts, only: [:index]
      end
    end
  end
end

# Rails.application.routes.draw do
#   get 'upcoming_concerts/create'
#
#   root 'application#angular'
#   get '/auth/spotify/callback', to: 'user#spotify'
#   get '/user', to: 'user#user'
#   post '/zipcode', to: 'user#zipcode'
#
#   resources :user, only: [:destroy] do
#     resources :upcoming_concerts, only: [:index, :create, :destroy]
#     get '/all-concerts', to: 'concerts#show'
#   end
#
#   resources :artists, only: [:index, :show] do
#     resources :songs, only: [:index]
#     resources :concerts, only: [:index]
#   end
# end
