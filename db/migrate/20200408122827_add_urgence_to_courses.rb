class AddUrgenceToCourses < ActiveRecord::Migration[5.2]
  def change
    add_column :courses, :urgence, :integer
  end
end
