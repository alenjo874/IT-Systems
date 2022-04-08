class RentalSerializer < ActiveModel::Serializer
  attributes :id
  has_one :employee
  has_one :inventory
  has_many :tickets
end
