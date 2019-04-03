group_memberships = []
user.group_memberships.each do |group_membership|
  group_memberships.push(group_membership.id)
end 

json.extract! user, :id, :name
json.group_memberships group_memberships
