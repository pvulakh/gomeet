import { connect } from 'react-redux';
import { fetchGroup } from '../../actions/group_actions';
import GroupShow from './group_show';

const msp = (state, ownProps) => {
  const group = state.entities.groups[ownProps.match.params.groupId] || {};
  const currentUser = state.entities.users[state.session.id];
  const creator = state.entities.users[group.creator_id];
  return {
    group,
    currentUser,
    creator
  };
};

const mdp = dispatch => {
  return {
    fetchGroup: id => dispatch(fetchGroup(id))
  };
};

export default connect(msp, mdp)(GroupShow);