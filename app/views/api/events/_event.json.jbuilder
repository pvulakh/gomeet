json.extract! event, :id, :host_id, :group_id, :name, :description, :start_time, :end_time
  if (event.photo.attached?)
    json.photo url_for(event.photo)
  end 
  