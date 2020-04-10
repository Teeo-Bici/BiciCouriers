class CreateBikes < ActiveRecord::Migration[5.2]
  def change
    create_table :bikes do |t|
      t.integer :max_weight
      t.integer :max_size

      t.timestamps
    end
  end
end
