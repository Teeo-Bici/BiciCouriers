class AddCoordinatesToPickups < ActiveRecord::Migration[5.2]
  def change
    add_column :pickups, :latitude, :float
    add_column :pickups, :longitude, :float
  end
end
