import { connect } from 'react-redux';
import GroupIndex from './group_index';
import { fetchGroups, updateGroup } from '../../actions/group_actions';

const msp = state => {
  return {
    groups: Object.values(state.entities.groups)
  };
};

const mdp = dispatch => {
  return {
    fetchGroups: () => dispatch(fetchGroups()),
    updateGroup: group => dispatch(updateGroup(group))
  };
};

export default connect(msp, mdp)(GroupIndex);