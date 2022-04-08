class AddColumnTicketCasenum < ActiveRecord::Migration[6.1]
  def change
    add_column :tickets, :case_number, :bigint
  end
end
