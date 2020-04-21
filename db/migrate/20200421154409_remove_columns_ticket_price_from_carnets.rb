class RemoveColumnsTicketPriceFromCarnets < ActiveRecord::Migration[5.2]
  def change
    remove_column :carnets, :ticket_price
  end
end
