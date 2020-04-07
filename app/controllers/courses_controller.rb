class CoursesController < ApplicationController
  layout "commandes"

  def index
    @courses = Course.all
  end

  def new
    @course = Course.new
    drop = @course.drops.build
    pickup = @course.pickups.build
  end

  def create
    @course = Course.new(course_params)
    if @course.save
      redirect_to courses_path
    else
      render :new
    end
  end

private

  def course_params
        params.require(:course).permit(:id, :ticket_nb, :distance, :details, :status, :price, drops_attributes:[:id, :date, :address, :start_hour, :end_hour], pickups_attributes:[:id, :date, :address, :start_hour, :end_hour])
  end

end

