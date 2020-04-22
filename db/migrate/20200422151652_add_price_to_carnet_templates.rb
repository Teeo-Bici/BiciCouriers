class AddPriceToCarnetTemplates < ActiveRecord::Migration[5.2]
  def change
    add_monetize :carnet_templates, :price, currency: { present: false }
  end
end
