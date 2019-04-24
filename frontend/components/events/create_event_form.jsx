import React from 'react';
import { withRouter, Route, Redirect } from 'react-router-dom';
import moment from 'moment';
import timezone from 'moment-timezone';
import DatePicker from 'react-datepicker';

class CreateEventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.event;
    this.handleSubmit = this.handleSubmit.bind(this);
    }
  
  componentDidMount() {
    // debugger
    if (!this.props.groupTitle) {
      this.props.fetchGroup(groupId);
    }
  }

  handleChange(field) {
    return e => this.setState({[field]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createEvent(this.props.groupId, this.state);
    // history.push to events show page once built out
  }

  render() {
    // debugger
    if (!this.props.groupTitle) {
      return;
    }
    
    return (
      <div className='schedule-page'>
        <h1>create event form will go here</h1>
          <Route
            path="/schedule"
            render={
              () => {
                if (!this.props.currentUser) {
                  return <Redirect to="/login" />
                }
              }
            }
          />
          <h2>{moment().format("MMM Do YY")}</h2>
        </div>
    );
  }
}

export default withRouter(CreateEventForm);