class AddDescriptionToCarnets < ActiveRecord::Migration[5.2]
  def change
    add_column :carnets, :description, :string
  end
end
