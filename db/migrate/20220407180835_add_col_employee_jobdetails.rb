class AddColEmployeeJobdetails < ActiveRecord::Migration[6.1]
  def change
    add_column :employees, :department, :string
    add_column :employees, :position, :string
    add_column :employees, :email, :string
    add_column :employees, :extension, :integer
  end
end
