class RentalSerializer < ActiveModel::Serializer
  attributes :id
  has_one :employee
  has_one :inventory
end
