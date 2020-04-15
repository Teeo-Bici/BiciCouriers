class CoursesController < ApplicationController
  layout "commandes"

  def show
    @course = Course.find(params[:id])
  end

  def index
    @courses = []
    Course.all.map do |course|
      course.user_id == current_user.id ? @courses << course : course
    end
    # raise
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
        params.require(:course).permit(:id, :ticket_nb, :tickets_volume, :tickets_urgence, :tickets_distance, :distance, :details, :status, :price, :urgence, :carnet_id, :bike_id, :user_id, drops_attributes:[:id, :date, :details, :address, :start_hour, :end_hour], pickups_attributes:[:id, :details, :date, :address, :start_hour, :end_hour])
  end

end
