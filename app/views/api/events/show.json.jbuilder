json.event do
  json.partial! '/api/events/event', event: @event 
end 

json.host do 
  json.extract! @event.host, :id, :name
    if (@event.host.photo.attached?)
      json.photo url_for(@event.host.photo)
    end 
end 

json.current_user do 
  json.extract! current_user, :id 
  #snag current_user.rsvps when rsvps implemented 
end 