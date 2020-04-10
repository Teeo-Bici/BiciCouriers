class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home, :tarifs, :story]

  def home
  end

  def story
  end

  def tarifs
  end
end
