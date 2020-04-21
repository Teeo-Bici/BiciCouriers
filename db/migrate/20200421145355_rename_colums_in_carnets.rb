class RenameColumsInCarnets < ActiveRecord::Migration[5.2]
  def change
    rename_column :carnets, :carnet_templates_id, :carnet_template_id

  end
end
