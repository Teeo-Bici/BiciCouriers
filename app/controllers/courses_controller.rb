class CoursesController < ApplicationController
  layout "commandes"

  def show
    @course = Course.find(params[:id])
  end

  def index
    @courses = Course.all
  end

  def new
    @course = Course.new
    drop = @course.drops.build
    pickup = @course.pickups.build

    @drop = Drop.geocoded

    @drop_marker = [lat: @drop.first.latitude, lng: @drop.first.longitude]

  end

  def create
    @course = Course.new(course_params)
    if @course.save
      redirect_to courses_path
    # raise
    else
      render :new
    end
  end

private

  def course_params
        params.require(:course).permit(:id, :ticket_nb, :distance, :details, :status, :price, :urgence, :carnet_id, :bike_id, :user_id, drops_attributes:[:id, :date, :details, :address, :start_hour, :end_hour], pickups_attributes:[:id, :details, :date, :address, :start_hour, :end_hour])
  end

end
