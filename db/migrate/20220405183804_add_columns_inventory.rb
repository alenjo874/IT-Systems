class AddColumnsInventory < ActiveRecord::Migration[6.1]
  def change
    add_column :inventories, :cpu, :string
    add_column :inventories, :memory, :string
    add_column :inventories, :graphic_card, :string
  end
end
