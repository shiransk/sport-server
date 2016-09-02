Rails.application.routes.draw do

get '/', to: 'sports#index'

  namespace :api do 
    namespace :v1 do 
      get '/', to: 'sports#index'
      get '/sports', to: 'sports#index'
      get '/sports/:id', to: 'sports#show'
      post '/sports', to: 'sports#create'
      delete '/sports/:id', to: 'sports#destroy'
    end
  end
end
