class AddDescriptionToCarnetTemplates < ActiveRecord::Migration[5.2]
  def change
    add_column :carnet_templates, :description, :string
  end
end
