class RemoveColumnToCarnets < ActiveRecord::Migration[5.2]
  def change
    remove_column :carnets, :ticket_nb
  end
end
