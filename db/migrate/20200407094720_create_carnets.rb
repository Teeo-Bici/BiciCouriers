class CreateCarnets < ActiveRecord::Migration[5.2]
  def change
    create_table :carnets do |t|
      t.references :user, foreign_key: true
      t.string :ticket_nb
      t.string :ticket_price

      t.timestamps
    end
  end
end
