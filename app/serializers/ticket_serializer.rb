class TicketSerializer < ActiveModel::Serializer
  attributes :id, :subject, :level, :issue, :complete, :solution
  has_one :admin
  has_one :rental
  has_one :employee
end
