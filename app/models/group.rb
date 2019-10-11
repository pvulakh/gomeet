# == Schema Information
#
# Table name: groups
#
#  id          :bigint(8)        not null, primary key
#  creator_id  :integer          not null
#  title       :string           not null
#  description :text             not null
#  public      :boolean          default(TRUE)
#  lat         :float            not null
#  lng         :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

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
