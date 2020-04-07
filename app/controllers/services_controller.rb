class ServicesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index, :show]

  def index
    @services = Service.all
  end

  def show
    @service = Service.find(params[:id])
  end
end
