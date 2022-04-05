# Ticket.destroy_all
# Rental.destroy_all
# Admin.destroy_all
# Employee.destroy_all
# Inventory.destroy_all

# Admin.create(name:"Alen", manager: true)
# Employee.create(name:"Bob")
# Inventory.create(name:"MacBook Pro 2015", serial_number: 1234, rent: true)
# Rental.create(employee_id: Employee.all.sample.id, inventory_id: Inventory.all.sample.id)
# Ticket.create(admin_id: Admin.all.sample.id, rental_id: Rental.all.sample.id, employee_id: Employee.all.sample.id, subject: "screen broken", level: "High", issue:"laptop screen fell and broke can't do work")
# Ticket.create(admin_id: Admin.all.sample.id, rental_id: Rental.all.sample.id, employee_id: Employee.all.sample.id, subject: "internet not connecting", level: "Low", issue:"My internet stopped working, but it connects on my phone")
# Ticket.create(admin_id: Admin.all.sample.id, rental_id: Rental.all.sample.id, employee_id: Employee.all.sample.id, subject: "HDMI cable ripped", level: "Low", issue:"I accidentally cut my HDMI cable now I can't use my second monitor")