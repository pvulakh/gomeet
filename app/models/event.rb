# == Schema Information
#
# Table name: events
#
#  id          :bigint(8)        not null, primary key
#  host_id     :integer          not null
#  group_id    :integer          not null
#  name        :string           not null
#  start_time  :datetime         not null
#  end_time    :datetime         not null
#  description :text             not null
#  lat         :float            not null
#  lng         :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Event < ApplicationRecord 
  validates :host_id, :group_id, :name, :start_time, :end_time, :description, :lat, :lng, presence: true

  belongs_to :host,
    foreign_key: :host_id,
    primary_key: :id,
    class_name: 'User'

  belongs_to :group
  has_one_attached :photo
end 
