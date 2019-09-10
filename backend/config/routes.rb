Rails.application.routes.draw do
  # resources :user_cards
  resources :cards, only: [:index]
  resources :games, only: [:create, :update]
  resources :users, only: [:index, :create]
end
