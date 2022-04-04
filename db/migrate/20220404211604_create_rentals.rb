class CreateRentals < ActiveRecord::Migration[6.1]
  def change
    create_table :rentals do |t|
      t.belongs_to :employee, null: false, foreign_key: true
      t.belongs_to :inventory, null: false, foreign_key: true

      t.timestamps
    end
  end
end
