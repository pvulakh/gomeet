import { connect } from 'react-redux';
import { fetchGroup } from '../../actions/group_actions';
import { fetchUser } from '../../actions/user_actions';
import GroupShow from './group_show';

const msp = (state, ownProps) => {
  const group = state.entities.groups[ownProps.match.params.groupId];
  const currentUser = state.entities.users[state.session.id];
  return {
    group,
    currentUser,
    users: state.entities.users
  };
};

const mdp = dispatch => {
  return {
    fetchGroup: id => dispatch(fetchGroup(id)),
    fetchUser: id => dispatch(fetchUser(id))
  };
};

export default connect(msp, mdp)(GroupShow);