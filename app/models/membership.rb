# == Schema Information
#
# Table name: memberships
#
#  id         :bigint(8)        not null, primary key
#  user_id    :integer          not null
#  group_id   :integer          not null
#  intro      :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Membership < ApplicationRecord 
  validates :user_id, :group_id, presence: true

  belongs_to :user 
  belongs_to :group
end
