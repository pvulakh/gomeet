import { RECEIVE_GROUPS, RECEIVE_GROUP, REMOVE_GROUP } from '../actions/group_actions';
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
      return newState;
    case REMOVE_GROUP:
      newState = merge({}, state);
      delete newState[action.groupId];
      return newState;
    default: 
      return state;
  }
};