class AddImageToCarnetTemplates < ActiveRecord::Migration[5.2]
  def change
    add_column :carnet_templates, :image, :string
  end
end
