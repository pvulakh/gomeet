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




