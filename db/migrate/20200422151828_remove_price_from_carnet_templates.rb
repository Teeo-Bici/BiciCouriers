class RemovePriceFromCarnetTemplates < ActiveRecord::Migration[5.2]
  def change
    remove_column :carnet_templates, :ticket_price, :integer
  end
end
