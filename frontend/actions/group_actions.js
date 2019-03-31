import * as GroupApiUtil from '../util/group_api_util';

export const RECEIVE_GROUPS = "RECEIVE_GROUPS";
export const RECEIVE_GROUP = "RECEIVE_GROUP";
export const REMOVE_GROUP = "REMOVE_GROUP";

export const receiveGroups = groups => {
  return {
    type: RECEIVE_GROUPS,
    groups
  }; 
};

export const receiveGroup = group => {
  return {
    type: RECEIVE_GROUP,
    group
  };
};


export const removeGroup = groupId => {
  return {
    type: REMOVE_GROUP,
    groupId
  };
};

export const fetchGroups = () => dispatch => (
  GroupApiUtil.fetchGroups().then(groups => dispatch(receiveGroups(groups)))
);

export const fetchGroup = id => dispatch => (
  GroupApiUtil.fetchGroup(id).then(group => dispatch(receiveGroup(group)))
);

export const createGroup = group => dispatch => (
  GroupApiUtil.createGroup(group).then(group => dispatch(receiveGroup(group)))
);

export const updateGroup = group => dispatch => (
  GroupApiUtil.updateGroup(group).then(group => dispatch(receiveGroup(group)))
);

export const deleteGroup = groupId => dispatch => (
  GroupApiUtil.deleteGroup(groupId).then(() => dispatch(removeGroup(groupId)))
);