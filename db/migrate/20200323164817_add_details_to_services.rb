class AddDetailsToServices < ActiveRecord::Migration[5.2]
  def change
    add_column :services, :details, :string
  end
end
