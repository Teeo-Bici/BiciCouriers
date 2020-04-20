class CarnetsController < ApplicationController


  def index
    @carnets = policy_scope(Carnet).order(created_at: :desc)
  end

  def show
    @carnet = Carnet.find(params[:id])
    authorize @carnet
  end

end
