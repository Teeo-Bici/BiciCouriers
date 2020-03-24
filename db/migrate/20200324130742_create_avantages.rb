class CreateAvantages < ActiveRecord::Migration[5.2]
  def change
    create_table :avantages do |t|

      t.timestamps
    end
  end
end
