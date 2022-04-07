class EmployeeSerializer < ActiveModel::Serializer
  attributes :id, :name, :department, :position, :email, :extension
end
