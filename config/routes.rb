Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :update] do
      resources :checkins, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :drinks, only: [:create, :show, :update, :edit, :destroy, :index] do
      resources :checkins, only: [:index ]
    end
    resources :checkins, only: [:show, :index, :create]
    resources :breweries, only: [:create]
  end
end
