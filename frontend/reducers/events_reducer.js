import { RECEIVE_EVENTS, RECEIVE_EVENT, REMOVE_EVENT } from '../actions/event_actions';
import { RECEIVE_GROUP } from '../actions/group_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  let newState;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_EVENTS:
      return action.events;
    case RECEIVE_EVENT:
      return merge({}, state, {[action.event.id]: action.event});
    case REMOVE_EVENT:
      newState = merge({}, state);
      delete newState[action.eventId];
      return newState;
    case RECEIVE_GROUP:
      return merge({}, state, action.events);
    default: 
      return state;
  }
};