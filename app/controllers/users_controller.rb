class UsersController < ApplicationController
  layout "commandes"

  def show
    @user = User.find(current_user.id)
  end

end
