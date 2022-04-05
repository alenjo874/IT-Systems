# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_04_05_183804) do

  # These are extensions that must be enabled in order to support this database
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
    t.string "cpu"
    t.string "memory"
    t.string "graphic_card"
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
    t.boolean "complete"
    t.string "solution"
    t.integer "severity_level"
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
