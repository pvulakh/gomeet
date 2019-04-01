class Group < ApplicationRecord
  validates :creator_id, :title, :description, :lat, :lng, presence: true

  has_one_attached :photo
end