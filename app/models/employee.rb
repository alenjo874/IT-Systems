class Employee < ApplicationRecord
    has_many :tickets
    has_many :rentals
end
