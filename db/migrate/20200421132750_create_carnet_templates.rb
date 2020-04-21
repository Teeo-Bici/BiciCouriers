class CreateCarnetTemplates < ActiveRecord::Migration[5.2]
  def change
    create_table :carnet_templates do |t|

      t.timestamps
    end
  end
end
