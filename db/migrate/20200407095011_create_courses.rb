class CreateCourses < ActiveRecord::Migration[5.2]
  def change
    create_table :courses do |t|
      t.references :user, foreign_key: true
      t.references :carnet, foreign_key: true
      t.references :bike, foreign_key: true
      t.integer :ticket_nb
      t.integer :distance
      t.string :details

      t.timestamps
    end
  end
end
