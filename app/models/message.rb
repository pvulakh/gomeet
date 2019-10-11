# == Schema Information
#
# Table name: messages
#
#  id         :bigint(8)        not null, primary key
#  body       :string
#  author_id  :integer
#  dm_id      :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Message < ApplicationRecord
  validates :body, null: false 

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :dm
end 
