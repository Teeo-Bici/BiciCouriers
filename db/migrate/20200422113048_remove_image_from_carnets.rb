class RemoveImageFromCarnets < ActiveRecord::Migration[5.2]
  def change
    remove_column :carnets, :image, :string
  end
end
