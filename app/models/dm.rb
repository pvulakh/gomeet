# == Schema Information
#
# Table name: dms
#
#  id         :bigint(8)        not null, primary key
#  dmee_id    :integer
#  dmer_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Dm < ApplicationRecord
  validates_uniqueness_of :dmee_id, scope: [ :dmer_id ]
  validates :dmee_id, :dmer_id, null: false 
  validate :already_dm?
  
  belongs_to :dmer,
    primary_key: :id,
    foreign_key: :dmer_id,
    class_name: :User 

  belongs_to :dmee, 
    primary_key: :id,
    foreign_key: :dmee_id,
    class_name: :User

  has_many :messages

  def already_dm?
    unless Dm.where(dmee_id: self.dmer_id, dmer_id: self.dmee_id).length == 0
      errors.add(:dmee_id, "dm already exists")
    end 
  end 
end 
