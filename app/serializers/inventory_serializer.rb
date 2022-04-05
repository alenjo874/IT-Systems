class InventorySerializer < ActiveModel::Serializer
  attributes :id, :name, :serial_number, :rent

  has_many :rentals
end
