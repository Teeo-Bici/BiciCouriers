class CreatePickups < ActiveRecord::Migration[5.2]
  def change
    create_table :pickups do |t|
      t.references :course, foreign_key: true
      t.string :address
      t.integer :start_hour
      t.integer :end_hour
      t.string :details

      t.timestamps
    end
  end
end
