import { RECEIVE_GROUPS, RECEIVE_GROUP, REMOVE_GROUP } from '../actions/group_actions';
import { RECEIVE_EVENT, REMOVE_EVENT } from '../actions/event_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  let newState;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_GROUPS:
      return action.groups;
    case RECEIVE_GROUP:
      newState = merge({}, state, {[action.group.id]: action.group});
      newState[action.group.id].members = action.group.members;
      newState[action.group.id].member_avatars = action.group.member_avatars;
      newState[action.group.id].events = action.group.events;
      return newState;
    case REMOVE_GROUP:
      newState = merge({}, state);
      delete newState[action.groupId];
      return newState;
    case RECEIVE_EVENT:
      newState = merge({}, state);
      if (!state[action.event.group_id].events.includes(action.event.id)) {
        newState[action.event.group_id].events.push(action.event.id);
      }
      return newState;
    case REMOVE_EVENT:
      newState = merge({}, state);
      if (state[action.groupId].events.includes(action.eventId)) {
        const oldEvents = state[action.groupId].events;
        const newEvents = oldEvents.filter(id => id != action.eventId);
        newState[action.groupId].events = newEvents;
        return newState;
      }
      return newState;
    default: 
      return state;
  }
};