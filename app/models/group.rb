class Group < ApplicationRecord
  validates :creator_id, :title, :description, :lat, :lng, presence: true

  has_one_attached :photo
  has_many :memberships
  has_many :members,
    through: :memberships,
    source: :user

  belongs_to :creator,
    foreign_key: :creator_id,
    primary_key: :id,
    class_name: 'User'

  has_many :events
end