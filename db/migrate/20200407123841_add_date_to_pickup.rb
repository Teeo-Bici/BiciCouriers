class AddDateToPickup < ActiveRecord::Migration[5.2]
  def change
    add_column :pickups, :date, :date
  end
end
