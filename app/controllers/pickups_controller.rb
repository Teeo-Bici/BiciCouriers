class PickupsController < ApplicationController
    def new
      # @pickup = Pickup.new
    end

    def create
      # @pickup = Pickup.new(pickup_params)
      # if @pickup.save
      #   redirect_to courses_path
      # else
      #   render :new
      # end
    end
  private

    # def pickup_params
    #       params.require(:pickup).permit(:id, :date, :details, :address, :start_hour, :end_hour)
    # end
end
