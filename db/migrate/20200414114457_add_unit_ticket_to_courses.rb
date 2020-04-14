class AddUnitTicketToCourses < ActiveRecord::Migration[5.2]
  def change
    add_column :courses, :tickets_urgence, :integer
    add_column :courses, :tickets_volume, :integer
    add_column :courses, :tickets_distance, :integer
  end
end
