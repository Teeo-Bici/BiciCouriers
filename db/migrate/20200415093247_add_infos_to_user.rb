class AddInfosToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :address, :string
    add_column :users, :billing_address, :string
    add_column :users, :paper_invoice, :boolean
  end
end
