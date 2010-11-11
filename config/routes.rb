Raulsan::Application.routes.draw do
  match '/myWorld' => 'home#myWorld'
  match '/technology' => 'home#technology'
  match '/environment' => 'home#environment'
  match '/contact' => 'home#contact'
  match '/blog' => 'home#blog'
  root :to => 'home#index'
end
