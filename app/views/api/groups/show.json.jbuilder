json.group do
  json.partial! '/api/groups/group', group: @group
end
 
json.user do
  json.extract! @group.creator, :id, :name
    if (@group.creator.photo.attached?)
      json.photo url_for(@group.creator.photo)
    end
end

json.current_user do 
  json.extract! current_user, :id
  json.group_memberships current_user.group_membership_ids
end

json.events do 
  @group.events.each do |event|
    json.set! event.id do 
      json.extract! event, :id, :name, :description, :start_time, :lat, :lng
    end
  end 
end 
