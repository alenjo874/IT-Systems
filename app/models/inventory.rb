class Inventory < ApplicationRecord
    has_many :rentals
    has_many :tickets, through: :rentals
end
