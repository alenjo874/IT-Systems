class AddColumnTicketSolutionSolved < ActiveRecord::Migration[6.1]
  def change
    add_column :tickets, :complete, :boolean
    add_column :tickets, :solution, :string
  end
end
