class Rental < ApplicationRecord
  belongs_to :employee
  belongs_to :inventory
  has_many :tickets
end
