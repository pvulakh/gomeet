Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [ :create, :show ] #:show, :update when finishing users
    resource :session, only: [ :create, :destroy ]
    resources :groups, only: [ :index, :create, :show, :update, :destroy ]
    resources :events, only: [ :index ]
    
    resources :groups do
      resources :memberships, only: [ :create ]
      resource :memberships, only: [ :destroy ]
      resources :events, only: [ :index, :create, :show, :update, :destroy ]
    end
  end 

  root to: "static_pages#root"
end
