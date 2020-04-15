Rails.application.routes.draw do
  devise_for :users
  match 'profil', to: 'users#show', via: 'get'

  root to: 'pages#home'
  get "/histoire", to: "pages#story"
  get "/tarifs", to: "pages#tarifs"

  # get "/contact", to: "pages#contact"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html



  resources :services, only: [:index, :show]

  resources :avantages, only: [:index]

  resources :contacts, only: [:new, :create]

  resources :courses, only: [:new, :create, :index, :show] do
    resources :drops, only: [ :new, :create ]
    resources :pickups, only: [ :new, :create ]
  end

  resources :carnets, only: [:new, :create, :index, :show]
end
