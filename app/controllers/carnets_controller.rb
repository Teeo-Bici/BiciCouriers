class CarnetsController < ApplicationController
  layout "commandes"

  def index
    @carnets = Carnet.all
  end

  def show
    @carnet = Carnet.find(params[:id])
  end

end
