class AvantagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index]

  def index
    @avantages = Avantage.all
  end
end
