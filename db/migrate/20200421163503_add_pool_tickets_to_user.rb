class AddPoolTicketsToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :pool, :integer
  end
end
