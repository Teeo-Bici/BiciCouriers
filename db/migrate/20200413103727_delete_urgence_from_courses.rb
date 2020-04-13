class DeleteUrgenceFromCourses < ActiveRecord::Migration[5.2]
  def change
    remove_column :courses, :urgence
  end
end
