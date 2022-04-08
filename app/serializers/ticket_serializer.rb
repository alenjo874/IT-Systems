class TicketSerializer < ActiveModel::Serializer
  attributes :id, :subject, :level, :issue, :complete, :solution, :create_date, :severity_level, :rental_item, :case_number
  has_one :admin
  has_one :rental
  has_one :employee

  def create_date 
    self.object.created_at.to_date.strftime("%b %d, %Y")
  end

  def rental_item 
    self.object.rental.inventory
  end



end
