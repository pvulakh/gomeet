import { connect } from 'react-redux';
import CreateEventForm from './create_event_form';
import { createEvent } from '../../actions/event_actions';
import { fetchGroup } from '../../actions/group_actions';

const msp = (state, ownProps) => {
  const event = {
      name: '',
      startTime: '',
      endTime: '',
      description: '',
      lat: 42.0,
      lng: 43.0
    };
  const groupId = ownProps.match.params.groupId 
  debugger
  const groupTitle = state.entities.groups[groupId].title
  
  return {
    event,
    currentUser: state.entities.users[state.session.id],
    groupId,
    groupTitle
  }
}

const mdp = dispatch => {
  return {
    createEvent: (groupId, event) => dispatch(createEvent(groupId, event)),
    fetchGroup: id => dispatch(fetchGroup(id))
  };
}


export default connect(msp, mdp)(CreateEventForm);
