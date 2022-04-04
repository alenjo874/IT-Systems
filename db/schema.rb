
ActiveRecord::Schema.define(version: 2022_04_04_211716) do
  
  enable_extension "plpgsql"

  create_table "admins", force: :cascade do |t|
    t.string "name"
    t.boolean "manager"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "employees", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "inventories", force: :cascade do |t|
    t.string "name"
    t.integer "serial_number"
    t.boolean "rent"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "rentals", force: :cascade do |t|
    t.bigint "employee_id", null: false
    t.bigint "inventory_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["employee_id"], name: "index_rentals_on_employee_id"
    t.index ["inventory_id"], name: "index_rentals_on_inventory_id"
  end

  create_table "tickets", force: :cascade do |t|
    t.bigint "admin_id", null: false
    t.bigint "rental_id", null: false
    t.bigint "employee_id", null: false
    t.string "subject"
    t.string "level"
    t.string "issue"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["admin_id"], name: "index_tickets_on_admin_id"
    t.index ["employee_id"], name: "index_tickets_on_employee_id"
    t.index ["rental_id"], name: "index_tickets_on_rental_id"
  end

  add_foreign_key "rentals", "employees"
  add_foreign_key "rentals", "inventories"
  add_foreign_key "tickets", "admins"
  add_foreign_key "tickets", "employees"
  add_foreign_key "tickets", "rentals"
end
