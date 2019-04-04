class Event < ApplicationRecord 
  validates :host_id, :group_id, :name, :start_time, :end_time, :description, :lat, :lng, presence: true

  belongs_to :host,
    foreign_key: :host_id,
    primary_key: :id,
    class_name: 'User'

  belongs_to :group
  has_one_attached :photo
end 