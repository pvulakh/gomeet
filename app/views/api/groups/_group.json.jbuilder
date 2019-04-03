members = []
group.members.each do |member|
  members.push(member.id)
end 

json.extract! group, :id, :creator_id, :title, :description, :public, :lat, :lng, :created_at
  if (group.photo.attached?) 
    json.photo url_for(group.photo)
  end
  
json.members members
