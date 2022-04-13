class RentalSerializer < ActiveModel::Serializer
  attributes :id, :employee_id
  has_one :employee
  has_one :inventory
  has_many :tickets
end
