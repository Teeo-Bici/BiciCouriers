class CoursesController < ApplicationController

  def show
    @course = Course.find(params[:id])
    authorize @course
  end

  def index
    # @courses = Course.where(user: current_user)
    @courses = policy_scope(Course).order(created_at: :desc)
  end

  def new
    @course = Course.new
    drop = @course.drops.build
    pickup = @course.pickups.build
    authorize drop
    authorize pickup


    @drop = Drop.geocoded

    @drop_marker = [lat: @drop.first.latitude, lng: @drop.first.longitude]

  end

  def create
    @course = Course.new(course_params)
    @carnet = current_user.carnets.last
    @course.user = current_user
    authorize @course
    if @course.save
      # raise
      add_course_to_carnet(@carnet, @course)
      @carnet.save
      redirect_to courses_path
    else
    # raise
      render :new
    end
  end

private

  def course_params
        params.require(:course).permit(:id, :ticket_nb, :tickets_volume, :tickets_urgence, :tickets_distance, :distance, :details, :status, :price, :urgence, :carnet_id, :bike_id, drops_attributes:[:id, :date, :details, :address, :start_hour, :end_hour], pickups_attributes:[:id, :details, :date, :address, :start_hour, :end_hour])
  end

  def add_course_to_carnet(carnet, course)
    carnet.remaining_tickets = (carnet.remaining_tickets - course.ticket_nb)
  end
end
