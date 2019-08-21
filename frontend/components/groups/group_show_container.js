import { connect } from 'react-redux';
import { fetchGroup, createMembership, deleteMembership } from '../../actions/group_actions';
import { fetchGroupEvents } from '../../actions/event_actions';
import GroupShow from './group_show';

const msp = (state, ownProps) => {
  const group = state.entities.groups[ownProps.match.params.groupId] || {};
  const currentUser = state.entities.users[state.session.id];
  const creator = state.entities.users[group.creator_id];
  const events = state.entities.events;
  
  return {
    group,
    currentUser,
    creator,
    events
  }; 
};
 
const mdp = dispatch => {
  return {
    fetchGroup: id => dispatch(fetchGroup(id)),
    fetchGroupEvents: groupId => dispatch(fetchGroupEvents(groupId)),
    joinGroup: id => dispatch(createMembership(id)),
    leaveGroup: id => dispatch(deleteMembership(id))
  };
};

export default connect(msp, mdp)(GroupShow);