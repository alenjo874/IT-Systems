class CreateTickets < ActiveRecord::Migration[6.1]
  def change
    create_table :tickets do |t|
      t.belongs_to :admin, null: false, foreign_key: true
      t.belongs_to :rental, null: false, foreign_key: true
      t.belongs_to :employee, null: false, foreign_key: true
      t.string :subject
      t.string :level
      t.string :issue

      t.timestamps
    end
  end
end
