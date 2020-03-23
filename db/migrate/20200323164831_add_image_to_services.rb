class AddImageToServices < ActiveRecord::Migration[5.2]
  def change
        add_column :services, :images, :string
  end
end
