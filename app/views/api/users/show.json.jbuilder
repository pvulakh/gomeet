json.partial! "api/users/user", user: @user
json.extract! @user, :bio, :lat, :lng

