class AddImageContreToAvantages < ActiveRecord::Migration[5.2]
  def change
    add_column :avantages, :image_contre, :string
  end
end
