export const fetchGroupEvents = groupId => {
  return $.ajax({
    method: 'GET',
    url: `api/groups/${groupId}/events`
  });
};

export const fetchAllEvents = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/events'
  });
};

export const fetchEvent = (groupId, id) => {
  return $.ajax({
    method: 'GET',
    url: `api/groups/${groupId}/events/${id}`
  });
};

export const createEvent = (groupId, event) => {  
  // debugger
  return $.ajax({
    method: 'POST',
    url: `api/groups/${groupId}/events`,
    data: { event }
  });
};

export const updateEvent = (groupId, event) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/groups/${groupId}/events/${event.id}`,
    //url: `api/groups/${groupId}/events/${event.get('event[id]')}`,
    data: { event }
  });
};

export const deleteEvent = (groupId, id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/groups/${groupId}/events/${id}`
  });
};