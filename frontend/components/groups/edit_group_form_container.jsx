import { connect } from 'react-redux';
import EditGroupForm from './edit_group_form';
import { fetchGroup, updateGroup, deleteGroup } from '../../actions/group_actions';

const msp = (state, ownProps) => {
  const defaultGroup = {
    title: '',
    description: '',
    lat: 42.0,
    lng: 43.0
  };
  const group = state.entities.groups[ownProps.match.params.groupId] || defaultGroup;
  const formType = 'Update Group';
  return { 
    group, 
    currentUser: state.entities.users[state.session.id],
    formType 
  };
};

const mdp = dispatch => {
  return {
    fetchGroup: id => dispatch(fetchGroup(id)),
    action: group => dispatch(updateGroup(group)),
    deleteGroup: id => dispatch(deleteGroup(id))
  };
};

export default connect(msp, mdp)(EditGroupForm);