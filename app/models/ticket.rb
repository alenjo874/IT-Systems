class Ticket < ApplicationRecord
  belongs_to :admin
  belongs_to :rental
  belongs_to :employee
end
