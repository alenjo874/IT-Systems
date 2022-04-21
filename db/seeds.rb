require 'faker'
# Ticket.destroy_all
# Rental.destroy_all
# Admin.destroy_all
# Employee.destroy_all
# Inventory.destroy_all

# Admin.create(name:"Alen Jo", manager: true)

# Employee.create(name:"John Smith", department: "Engineering", position: "Lead Software Developer", email: "jsmith@email.com", extension: 711)

# 20.times do

# Inventory.create(name:"MacBook Pro 2015", serial_number: rand(10000..99999), rent: true, cpu: "2.2 Ghz Quad-Core Intel Core i7", memory: "16 GB", graphic_card:"Intel Iris Pro")
# Inventory.create(name:"Acer Aspire 5", serial_number: rand(10000..99999), rent: true, cpu: "AMD Ryzen 3 3350U", memory: "4 GB", graphic_card:"Intel Iris Pro")
# Inventory.create(name:"
# Lenovo Chromebook Flex", serial_number: rand(10000..99999), rent: true, cpu: "MediaTek MT8173", memory: "4 GB", graphic_card:"Intel Iris Pro")
# Inventory.create(name:"ASUS L510", serial_number: rand(10000..99999), rent: true, cpu: "Intel Pentium Silver N5030", memory: "16 GB", graphic_card:"Intel Iris Pro")
# Inventory.create(name:"Samsung Chromebook", serial_number: rand(10000..99999), rent: true, cpu: "Intel Celeron N4020", memory: "16 GB", graphic_card:"Intel Iris Pro")

# end

# inv_id = 0

# while inv_id < Inventory.all.length do
#     Rental.create(employee_id: Employee.all.sample.id, inventory_id: Inventory.all[inv_id].id)
#     inv_id = 1 + inv_id
# end

# Ticket.create(admin_id: Admin.all.sample.id, rental_id: Rental.all.sample.id, employee_id: Employee.all.sample.id, subject: "screen broken", level: "Critical", issue:"laptop screen fell and broke can't do work", complete: false, solution: "", severity_level: 3, case_number: Faker::Number.number(digits: 10), case_category: "Hardware" )

# Ticket.create(admin_id: Admin.all.sample.id, rental_id: Rental.all.sample.id, employee_id: Employee.all.sample.id, subject: "internet not connecting", level: "Low", issue:"My internet stopped working, but it connects on my phone",complete: false, solution: "", severity_level: 1, case_number: Faker::Number.number(digits: 10), case_category: "Hardware")

# Ticket.create(admin_id: Admin.all.sample.id, rental_id: Rental.all.sample.id, employee_id: Employee.all.sample.id, subject: "Locked out of email", level: "Moderate", issue:"My email password and recovery is not working", complete: false, solution: "", severity_level: 2, case_number: Faker::Number.number(digits: 10), case_category: "Account")

# Ticket.create(admin_id: Admin.all.sample.id, rental_id: Rental.all.sample.id, employee_id: Employee.all.sample.id, subject: "HDMI cable ripped", level: "Low", issue:"I accidentally cut my HDMI cable now I can't use my second monitor",complete: false, solution: "", severity_level: 1, case_number: Faker::Number.number(digits: 10), case_category: "Hardware")


# ticket_create = 0
# sev_level = ["Critical", "Moderate", "Low"]
# case_cat = ["Hardware", "Software", "Account", "Other"]

# while ticket_create < Inventory.all.length do
#     Ticket.create(admin_id: Admin.all.sample.id, rental_id: Rental.all.sample.id, employee_id: Employee.all.sample.id, subject: Faker::Lorem.sentence(word_count: 3), level: sev_level.sample, issue:Faker::Lorem.paragraph(sentence_count: 1),complete: false, solution: "", case_number: Faker::Number.number(digits: 10), case_category: case_cat.sample)
#     ticket_create = 1 + ticket_create
# end

ticket_update_sev = 0

while ticket_update_sev < Ticket.all.length do
   
    if Ticket.all[ticket_update_sev].level === "Low"
        Ticket.all[ticket_update_sev].update(severity_level: 1)
    elsif Ticket.all[ticket_update_sev].level === "Moderate"
        Ticket.all[ticket_update_sev].update(severity_level: 2)
    elsif Ticket.all[ticket_update_sev].level === "Critical"
        Ticket.all[ticket_update_sev].update(severity_level: 3)
    end

    ticket_update_sev += 1
end