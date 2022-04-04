class AdminSerializer < ActiveModel::Serializer
  attributes :id, :name, :manager
end
