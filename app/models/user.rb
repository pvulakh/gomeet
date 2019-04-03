# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  name            :string           not null
#  bio             :text
#  lat             :float            not null
#  lng             :float            not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord 
    validates :email, :password_digest, :session_token, :name, :lat, :lng, presence: true 
    validates :email, uniqueness: true 
    validates :password, length: { minimum: 6, allow_nil: true }
    after_initialize :ensure_session_token 

    has_one_attached :photo
    has_many :memberships

    has_many :group_memberships,
        through: :memberships,
        source: :group

    has_many :groups,
        foreign_key: :creator_id,
        primary_key: :id,
        class_name: 'Group'
    
    attr_reader :password 
    
    def password=(password)
        @password = password 
        self.password_digest = BCrypt::Password.create(password)
    end 

    def is_password?(password) 
        bcrypt_digest = BCrypt::Password.new(self.password_digest)
        bcrypt_digest.is_password?(password)
    end 

    def self.find_by_credentials(email, password) 
        user = self.find_by(email: email)
        return nil unless (user && user.is_password?(password))
        user
    end 

    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end 

    def reset_session_token!
        self.session_token = self.class.generate_session_token
        self.save!
        self.session_token
    end

    private 
    def self.generate_session_token
        SecureRandom.urlsafe_base64(16)
    end 
end 
