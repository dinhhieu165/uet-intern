class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :configure_permitted_parameters, if: :devise_controller?



  def after_sign_in_path_for(resource)
    
      puts "########################################"
      puts resource
      puts "########################################"
      
      #stored_location_for(resource) || request.referer || root_path
      super
    
  end

  
    
  
    protected
    
    def configure_permitted_parameters
      attributes = [:name,:username, :avatar]
      devise_parameter_sanitizer.permit(:sign_up, keys: attributes)
      devise_parameter_sanitizer.permit(:account_update, keys: attributes)
    end



end