class ApplicationController < ActionController::Base
  before_action :authenticate_user!
  before_action :configure_permitted_parameters, if: :devise_controller?

  layout :layout_by_resource

    private

    def layout_by_resource
      if devise_controller? && resource_name == :user && action_name == "edit"
        "commandes"
      else
        "application"
      end
    end

  def configure_permitted_parameters
    # For additional fields in app/views/devise/registrations/new.html.erb
    devise_parameter_sanitizer.permit(:sign_up, keys: [:first_name, :last_name, :company])

    # For additional in app/views/devise/registrations/edit.html.erb
    devise_parameter_sanitizer.permit(:account_update, keys: [:username, :address, :first_name, :last_name, :company, :paper_invoice])
  end

  def default_url_options
    { host: ENV["DOMAIN"] || "localhost:3000" }
  end
end
