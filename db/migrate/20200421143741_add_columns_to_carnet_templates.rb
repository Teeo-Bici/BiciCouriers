class AddColumnsToCarnetTemplates < ActiveRecord::Migration[5.2]
  def change
    add_column :carnet_templates, :ticket_nb, :integer
    add_column :carnet_templates, :ticket_price, :integer
  end
end
