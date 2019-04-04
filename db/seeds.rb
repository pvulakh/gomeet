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
    title: 'Coding with Ruby: Introduction',
    description: 'Come learn Ruby 101! All levels welcome - we encourage intermediate and advanced Rubyists to help out beginners. Presentations will focus on Ruby fundamentals.',
    lat: 42.0,
    lng: 43.0,
    creator_id: user2.id
)

group2 = Group.create!(
    title: 'Book Club with SciFi Tendencies',
    description: "Join us for monthly book club meetings focusing on scifi. Previously read books include Permutation City, Do Androids Dream of Electric Sheep?, Ready Player One, The Three-Body Problem, and Snow Crash. This month's book is The Time Machine by H. G. Wells.",
    lat: 42.0,
    lng: 43.0,
    creator_id: user3.id
)

group3 = Group.create!(
    title: 'Brooklyn Buskers Unite',
    description: "Come make music with us in Prospect Park, open-mic style! Musicians of all levels welcome. Attendees are not required to perform - do whatever you're most comfortable with!",
    lat: 42.0,
    lng: 43.0,
    creator_id: user4.id
)

group4 = Group.create!(
    title: 'Hikers from NYC',
    description: "Biweekly trips to nearby parks for the hikers in NYC who, well, don't have very many places to hike in. We got to Harriman State Park a lot and could use more knowledge of nearby spots - please help.",
    lat: 42.0,
    lng: 43.0,
    creator_id: user4.id
)

group5 = Group.create!(
    title: 'Coding with JavaScript: Introduction',
    description: 'Come learn JavaScript 101! All levels welcome - we encourage intermediate and advanced developers to help out beginners. Presentations will focus on JavaScript fundamentals.',
    lat: 42.0,
    lng: 43.0,
    creator_id: user5.id
)

group6 = Group.create!(
    title: 'Less Positive Hikers from NYC',
    description: "We go to Central Park and complain about how there aren't enough parks here.",
    lat: 42.0,
    lng: 43.0,
    creator_id: user6.id
)

group7 = Group.create!(
    title: 'Painting in Parks',
    description: 'Weekly painting sessions, alternating between Prospect Park and Central Park. Come paint with us - still life, abstract, portrait, whatever floats your painting boat.',
    lat: 42.0,
    lng: 43.0,
    creator_id: user6.id
)

group8 = Group.create!(
    title: 'Mushroom Foraging',
    description: 'We forage, we talk about foraging, we share recipes. Come join us!',
    lat: 42.0,
    lng: 43.0,
    creator_id: user6.id
)

group9 = Group.create!(
    title: 'Painting Not in Parks',
    description: "We don't paint in parks.",
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

group1.photo.attach(io: File.open('app/assets/images/seed/laptop-people-1.jpg'), filename:'laptop-people-1.jpg')
group2.photo.attach(io: File.open('app/assets/images/seed/book-club-1.jpg'), filename:'book-club-1.jpg')
group3.photo.attach(io: File.open('app/assets/images/seed/busking-1.jpg'), filename:'busking-1.jpg')
group4.photo.attach(io: File.open('app/assets/images/seed/hiking-group-1.jpg'), filename:'hiking-group-1.jpg')
group5.photo.attach(io: File.open('app/assets/images/seed/laptop-people-2.jpg'), filename:'laptop-people-2.jpg')
group6.photo.attach(io: File.open('app/assets/images/seed/hiking-group-2.jpg'), filename:'hiking-group-2.jpg')
group7.photo.attach(io: File.open('app/assets/images/seed/nature-painting-1.jpg'), filename:'nature-painting-1.jpg')
group8.photo.attach(io: File.open('app/assets/images/seed/mushroom-foraging-1.jpg'), filename:'mushroom-foraging-1.jpg')
group9.photo.attach(io: File.open('app/assets/images/seed/paintbrush-person-1.jpg'), filename:'paintbrush-person-1.jpg')


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