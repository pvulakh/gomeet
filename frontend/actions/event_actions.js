import * as EventApiUtil from '../util/event_api_util';

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const REMOVE_EVENT = "REMOVE_EVENT";

export const receiveEvents = events => {
  return {
    type: RECEIVE_EVENTS,
    events
  };
};

export const receiveEvent = ({event, host, current_user}) => {
  return {
    type: RECEIVE_EVENT,
    event,
    host,
    current_user
  };
};

export const removeEvent = (groupId, eventId) => {
  return {
    type: REMOVE_EVENT,
    groupId,
    eventId
  };
};

export const fetchAllEvents = () => dispatch => (
  EventApiUtil.fetchAllEvents().then(events => dispatch(receiveEvents(events)))
);

export const fetchGroupEvents = id => dispatch => (
  EventApiUtil.fetchGroupEvents(id).then(events => dispatch(receiveEvents(events)))
);

export const fetchEvent = (groupId, eventId) => dispatch => (
  EventApiUtil.fetchEvent(groupId, eventId).then(event => dispatch(receiveEvent(event)))
);

export const createEvent = (groupId, event) => dispatch => (
  EventApiUtil.createEvent(groupId, event).then(event => dispatch(receiveEvent(event)))
);

export const updateEvent = (groupId, event) => dispatch => (
  EventApiUtil.updateEvent(groupId, event).then(event => dispatch(receiveEvent(event)))
);

export const deleteEvent = (groupId, eventId) => dispatch => (
  EventApiUtil.deleteEvent(groupId, eventId).then(() => dispatch(removeEvent(groupId, eventId)))
);