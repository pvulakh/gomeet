members = []
member_avatars = []
group.members.each do |member|
  members.push(member.id)
  if member.photo.attached?
    member_avatars.push(url_for(member.photo)) 
  end 
end 

events = []
group.events.each do |event|
  events.push(event.id)
end

json.extract! group, :id, :creator_id, :title, :description, :public, :lat, :lng, :created_at
  if (group.photo.attached?) 
    json.photo url_for(group.photo)
  end
  
json.members members
json.member_avatars member_avatars
json.events events
