class AddColumnTicketsCategory < ActiveRecord::Migration[6.1]
  def change
    add_column :tickets, :case_category, :string
  end
end
