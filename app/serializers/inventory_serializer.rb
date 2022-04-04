class InventorySerializer < ActiveModel::Serializer
  attributes :id, :name, :serial_number, :rent
end
