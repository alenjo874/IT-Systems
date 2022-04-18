require 'faker'
# Ticket.destroy_all
# Rental.destroy_all
# Admin.destroy_all
# Employee.destroy_all
# Inventory.destroy_all

# Admin.create(name:"Alen Jo", manager: true)

# Employee.create(name:"John Smith", department: "Engineering", position: "Lead Software Developer", email: "jsmith@email.com", extension: 711)

20.times do

Inventory.create(name:"MacBook Pro 2015", serial_number: rand(10000..99999), rent: true, cpu: "2.2 Ghz Quad-Core Intel Core i7", memory: "16 GB", graphic_card:"Intel Iris Pro")
Inventory.create(name:"Acer Aspire 5", serial_number: rand(10000..99999), rent: true, cpu: "AMD Ryzen 3 3350U", memory: "4 GB", graphic_card:"Intel Iris Pro")
Inventory.create(name:"
Lenovo Chromebook Flex", serial_number: rand(10000..99999), rent: true, cpu: "MediaTek MT8173", memory: "4 GB", graphic_card:"Intel Iris Pro")
Inventory.create(name:"ASUS L510", serial_number: rand(10000..99999), rent: true, cpu: "Intel Pentium Silver N5030", memory: "16 GB", graphic_card:"Intel Iris Pro")
Inventory.create(name:"Samsung Chromebook", serial_number: rand(10000..99999), rent: true, cpu: "Intel Celeron N4020", memory: "16 GB", graphic_card:"Intel Iris Pro")

end


Ticket.create(admin_id: Admin.all.sample.id, rental_id: Rental.all.sample.id, employee_id: Employee.all.sample.id, subject: "screen broken", level: "Critical", issue:"laptop screen fell and broke can't do work", complete: false, solution: "", severity_level: 3, case_number: Faker::Number.number(digits: 10), case_category: "Hardware" )
Ticket.create(admin_id: Admin.all.sample.id, rental_id: Rental.all.sample.id, employee_id: Employee.all.sample.id, subject: "internet not connecting", level: "Low", issue:"My internet stopped working, but it connects on my phone",complete: false, solution: "", severity_level: 1, case_number: Faker::Number.number(digits: 10), case_category: "Hardware")
Ticket.create(admin_id: Admin.all.sample.id, rental_id: Rental.all.sample.id, employee_id: Employee.all.sample.id, subject: "Locked out of email", level: "Moderate", issue:"My email password and recovery is not working", complete: false, solution: "", severity_level: 2, case_number: Faker::Number.number(digits: 10), case_category: "Account")
Ticket.create(admin_id: Admin.all.sample.id, rental_id: Rental.all.sample.id, employee_id: Employee.all.sample.id, subject: "HDMI cable ripped", level: "Low", issue:"I accidentally cut my HDMI cable now I can't use my second monitor",complete: false, solution: "", severity_level: 1, case_number: Faker::Number.number(digits: 10), case_category: "Hardware")


# 50.times do 
# Rental.create(employee_id: Employee.all.sample.id, inventory_id: Inventory.all.sample.id)

# end