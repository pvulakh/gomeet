# json.extract! @group, :creator_id, :title, :description, :public, :lat, :lng, :created_at
json.partial!  '/api/groups/group', group: @group
