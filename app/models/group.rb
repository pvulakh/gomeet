class Group < ApplicationRecord
  validates :creator_id, :title, :description, :lat, :lng, presence: true

  has_one_attached :photo
  belongs_to :creator,
    foreign_key: :creator_id,
    primary_key: :id,
    class_name: 'User'
end