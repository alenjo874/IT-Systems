class InventorySerializer < ActiveModel::Serializer
  attributes :id, :name, :serial_number, :rent, :cpu, :memory, :graphic_card

  has_many :rentals
end
