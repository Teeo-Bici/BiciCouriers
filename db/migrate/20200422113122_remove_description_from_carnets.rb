class RemoveDescriptionFromCarnets < ActiveRecord::Migration[5.2]
  def change
    remove_column :carnets, :description, :string
  end
end
