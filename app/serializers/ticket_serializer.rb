class TicketSerializer < ActiveModel::Serializer
  attributes :id, :subject, :level, :issue, :complete, :solution, :create_date, :severity_level
  has_one :admin
  has_one :rental
  has_one :employee

  def create_date 
    self.object.created_at.to_date.strftime("%b %d, %Y")
  end



end
