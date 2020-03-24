class AvantagesController < ApplicationController
  def index
    @avantages = Avantage.all
  end
end
