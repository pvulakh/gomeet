require 'date'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Group.destroy_all
Membership.destroy_all 
Event.destroy_all

demo_user = User.create!(
    name: 'Demo User', 
    password: 'demo_user',
    email: 'demo_user@gomeet.com',
    session_token: SecureRandom.urlsafe_base64(16),
    lat: 42.0,
    lng: 43.0
)

user2 = User.create!(
    name: 'Name2 Name2',
    password: 'starwars',
    email: 'user2@gomeet.com',
    session_token: SecureRandom.urlsafe_base64(16),
    lat: 42.0,
    lng: 43.0
)

user3 = User.create!(
    name: 'Name3 Name3',
    password: 'starwars',
    email: 'user3@gomeet.com',
    session_token: SecureRandom.urlsafe_base64(16),
    lat: 42.0,
    lng: 43.0
)

user4 = User.create!(
    name: 'Name4 Name4',
    password: 'starwars',
    email: 'user4@gomeet.com',
    session_token: SecureRandom.urlsafe_base64(16),
    lat: 42.0,
    lng: 43.0
)

user5 = User.create!(
    name: 'Name5 Name5',
    password: 'starwars',
    email: 'user5@gomeet.com',
    session_token: SecureRandom.urlsafe_base64(16),
    lat: 42.0,
    lng: 43.0
)

user6 = User.create!(
    name: 'Name6 Name6',
    password: 'starwars',
    email: 'user6@gomeet.com',
    session_token: SecureRandom.urlsafe_base64(16),
    lat: 42.0,
    lng: 43.0
)


group1 = Group.create!(
    title: 'Group1 Title',
    description: 'Group1 Description',
    lat: 42.0,
    lng: 43.0,
    creator_id: user2.id
)

group2 = Group.create!(
    title: 'Group2 Title',
    description: 'Group2 Description Description',
    lat: 42.0,
    lng: 43.0,
    creator_id: user3.id
)

group3 = Group.create!(
    title: 'Group3 Title',
    description: 'Group3 Description Description',
    lat: 42.0,
    lng: 43.0,
    creator_id: user4.id
)

group4 = Group.create!(
    title: 'Group4 Title',
    description: 'Group4 Description Description',
    lat: 42.0,
    lng: 43.0,
    creator_id: user4.id
)

group5 = Group.create!(
    title: 'Group5 Title',
    description: 'Group5 Description Description',
    lat: 42.0,
    lng: 43.0,
    creator_id: user5.id
)

group6 = Group.create!(
    title: 'Group6 Title',
    description: 'Group6 Description Description',
    lat: 42.0,
    lng: 43.0,
    creator_id: user6.id
)

group7 = Group.create!(
    title: 'Group7 Title',
    description: 'Group7 Description Description',
    lat: 42.0,
    lng: 43.0,
    creator_id: user6.id
)

group8 = Group.create!(
    title: 'Group8 Title',
    description: 'Group8 Description Description',
    lat: 42.0,
    lng: 43.0,
    creator_id: user6.id
)

group9 = Group.create!(
    title: 'Group9 Title',
    description: 'Group9 Description Description',
    lat: 42.0,
    lng: 43.0,
    creator_id: user6.id
)

demo_user.photo.attach(io: File.open('app/assets/images/seed/owl-hat.jpg'), filename:'owl-hat.jpg')
user2.photo.attach(io: File.open('app/assets/images/seed/owl-hat.jpg'), filename:'owl-hat.jpg')
user3.photo.attach(io: File.open('app/assets/images/seed/owl-hat.jpg'), filename:'owl-hat.jpg')
user4.photo.attach(io: File.open('app/assets/images/seed/owl-hat.jpg'), filename:'owl-hat.jpg')
user5.photo.attach(io: File.open('app/assets/images/seed/owl-hat.jpg'), filename:'owl-hat.jpg')
user6.photo.attach(io: File.open('app/assets/images/seed/owl-hat.jpg'), filename:'owl-hat.jpg')

group1.photo.attach(io: File.open('app/assets/images/seed/owl-hat.jpg'), filename:'owl-hat.jpg')
group2.photo.attach(io: File.open('app/assets/images/seed/owl-hat.jpg'), filename:'owl-hat.jpg')
group3.photo.attach(io: File.open('app/assets/images/seed/owl-hat.jpg'), filename:'owl-hat.jpg')
group4.photo.attach(io: File.open('app/assets/images/seed/owl-hat.jpg'), filename:'owl-hat.jpg')
group5.photo.attach(io: File.open('app/assets/images/seed/owl-hat.jpg'), filename:'owl-hat.jpg')
group6.photo.attach(io: File.open('app/assets/images/seed/owl-hat.jpg'), filename:'owl-hat.jpg')
group7.photo.attach(io: File.open('app/assets/images/seed/owl-hat.jpg'), filename:'owl-hat.jpg')
group8.photo.attach(io: File.open('app/assets/images/seed/owl-hat.jpg'), filename:'owl-hat.jpg')
group9.photo.attach(io: File.open('app/assets/images/seed/owl-hat.jpg'), filename:'owl-hat.jpg')


Membership.create!(
    user_id: demo_user.id,
    group_id: group1.id
)

Membership.create!(
    user_id: user3.id,
    group_id: group1.id
)

Membership.create!(
    user_id: user4.id,
    group_id: group1.id
)



Membership.create!(
    user_id: demo_user.id,
    group_id: group2.id
)

Membership.create!(
    user_id: user2.id,
    group_id: group2.id
)

Membership.create!(
    user_id: user3.id,
    group_id: group2.id
)

Membership.create!(
    user_id: user5.id,
    group_id: group2.id
)


Membership.create!(
    user_id: demo_user.id,
    group_id: group4.id
)
Membership.create!(
    user_id: user6.id,
    group_id: group4.id
)

start = DateTime.new(2019, 4, 28, 6, 30)
finish = DateTime.new(2019, 4, 28, 9, 0)

event1 = Event.create(
    host_id: demo_user.id,
    group_id: group1.id,
    name: 'Event 1',
    description: 'description description description description description description description description description description description',
    lat: 42.0,
    lng: 43.0,
    start_time: start,
    end_time: finish
)

event2 = Event.create(
    host_id: demo_user.id,
    group_id: group1.id,
    name: 'Event 2',
    description: 'description description description description description description description description description description description',
    lat: 42.0,
    lng: 43.0,
    start_time: start,
    end_time: finish
)

event3 = Event.create(
    host_id: demo_user.id,
    group_id: group1.id,
    name: 'Event 3',
    description: 'description description description description description description description description description description description',
    lat: 42.0,
    lng: 43.0,
    start_time: start,
    end_time: finish
)

event4 = Event.create(
    host_id: demo_user.id,
    group_id: group1.id,
    name: 'Event 4',
    description: 'description description description description description description description description description description description',
    lat: 42.0,
    lng: 43.0,
    start_time: start,
    end_time: finish
)