class AddRemainingTicketsToCarnets < ActiveRecord::Migration[5.2]
  def change
    add_column :carnets, :remaining_tickets, :integer
  end
end
