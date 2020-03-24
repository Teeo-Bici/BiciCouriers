class AddImagePourToAvantages < ActiveRecord::Migration[5.2]
  def change
    add_column :avantages, :image_pour, :string
  end
end
