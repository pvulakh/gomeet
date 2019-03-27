# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

demo_user = User.create!(
    name: 'Demo User',
    password_digest: BCrypt::Password.create('demo_user'),
    email: 'demo_user@gomeet.com',
    session_token: 'E6kM-Q-Q3dDlnMRKKj-OGQ',
    lat: 42.0,
    lng: 43.0,
    created_at: 'T0',
    updated_at: 'T1'
)