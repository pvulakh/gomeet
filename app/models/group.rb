class Group < ApplicationRecord
  validates :creator_id, :title, :description, :lat, :lng, presence: true
end