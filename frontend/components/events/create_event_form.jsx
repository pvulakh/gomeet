import React from 'react';
import { withRouter, Route, Redirect } from 'react-router-dom';
//use moment.js and react datepicker

class CreateEventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.event;
    this.handleSubmit = this.handleSubmit.bind(this);
    }
  
  componentDidMount() {
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
    if (!this.props.groupTitle) {
      return;
    }
    
    return (
      <div className='schedule-page'>
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
        </div>
    );
  }
}

export default withRouter(CreateEventForm);