json.group do
  json.partial! '/api/groups/group', group: @group
end

json.user do
  json.extract! @group.creator, :id, :name
    if (@group.creator.photo.attached?)
      json.photo url_for(@group.creator.photo)
    end
end