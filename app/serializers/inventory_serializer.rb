class InventorySerializer < ActiveModel::Serializer
  attributes :id, :name, :serial_number, :rent, :cpu, :memory, :graphic_card, :ticket_history, :create_date

  has_many :rentals
  has_many :tickets

  def ticket_history 
      self.object.rentals
  end

  def create_date 
    self.object.created_at.to_date.strftime("%b %d, %Y")
  end

end
