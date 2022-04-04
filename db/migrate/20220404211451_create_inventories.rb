class CreateInventories < ActiveRecord::Migration[6.1]
  def change
    create_table :inventories do |t|
      t.string :name
      t.integer :serial_number
      t.boolean :rent

      t.timestamps
    end
  end
end
