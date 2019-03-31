import { connect } from 'react-redux';
import CreateGroupForm from './create_group_form';
import { createGroup } from '../../actions/group_actions';

const msp = state => {
  const group = {
      title: '',
      description: '',
      lat: 42.0,
      lng: 43.0
    };
  const formType = 'Create Group';
  
  return { 
    group, 
    currentUser: state.entities.users[state.session.id],
    formType };
};

const mdp = dispatch => {
  return {
    action: group => dispatch(createGroup(group))
  };
};

export default connect(msp, mdp)(CreateGroupForm);