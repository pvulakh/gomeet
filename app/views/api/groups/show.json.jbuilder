json.group do
  json.partial! '/api/groups/group', group: @group
end
 
json.user do
  json.extract! @group.creator, :id, :name
    if (@group.creator.photo.attached?)
      json.photo url_for(@group.creator.photo)
    end
end

if current_user
  json.current_user do 
    json.extract! current_user, :id
    json.group_memberships current_user.group_membership_ids
  end
end 

json.events do 
  @group.events.each do |event|
    json.set! event.id do 
      json.extract! event, :id, :name, :description, :lat, :lng
      s = event.start_time
      json.start_time [s.strftime("%a"), "#{s.strftime("%b")} #{s.strftime("%d")}", "#{s.strftime("%R")[1..-1]} PM" ].join(', ') 
    end
  end 
end 

