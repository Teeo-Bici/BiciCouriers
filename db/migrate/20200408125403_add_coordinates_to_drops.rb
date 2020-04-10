class AddCoordinatesToDrops < ActiveRecord::Migration[5.2]
  def change
    add_column :drops, :latitude, :float
    add_column :drops, :longitude, :float
  end
end
