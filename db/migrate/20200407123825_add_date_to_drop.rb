class AddDateToDrop < ActiveRecord::Migration[5.2]
  def change
    add_column :drops, :date, :date
  end
end
