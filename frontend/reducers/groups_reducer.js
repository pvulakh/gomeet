import { RECEIVE_GROUPS, RECEIVE_GROUP, REMOVE_GROUP } from '../actions/group_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_GROUPS:
      return action.groups;
    case RECEIVE_GROUP:
      return merge({}, state, {[action.group.id]: action.group});
      //memberships?????? how/where/is it automatic? test tomorrow

      //where do memberships even go in the state??????? is it just an array of ids in groups? then it is automatic since action.group has a memberships key......
    case REMOVE_GROUP:
      const newState = merge({}, state);
      delete newState[action.groupId];
      return newState;
    default: 
      return state;
  }
};