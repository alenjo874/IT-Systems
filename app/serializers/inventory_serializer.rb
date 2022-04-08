class InventorySerializer < ActiveModel::Serializer
  attributes :id, :name, :serial_number, :rent, :cpu, :memory, :graphic_card, :ticket_history

  has_many :rentals
  has_many :tickets

  def ticket_history 
      self.object.rentals
  end

end
