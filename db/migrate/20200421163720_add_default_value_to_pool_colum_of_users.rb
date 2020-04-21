class AddDefaultValueToPoolColumOfUsers < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :pool, :integer, :default => 0
  end
end
