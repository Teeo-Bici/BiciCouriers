class AddImageToCarnets < ActiveRecord::Migration[5.2]
  def change
    add_column :carnets, :image, :string
  end
end
