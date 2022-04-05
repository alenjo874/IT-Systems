class AddColumnTicketSeverityLevel < ActiveRecord::Migration[6.1]
  def change
    add_column :tickets, :severity_level, :integer
  end
end
