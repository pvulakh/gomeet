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
    if (!this.props.groupTitle) {
      this.props.fetchGroup(this.props.groupId);
    }
  }

  handleChange(field) {
    return e => this.setState({[field]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createEvent(this.props.groupId, this.state).then(() => this.props.history.push(`/${this.props.groupId}`));;
    // history.push to events show page once built out; for now, goes to group show
  }

  render() {
    if (!this.props.groupTitle) {
      return null;
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

        <section>
          <span>Create an event</span>
          <p>{this.props.groupTitle}</p>
        </section>

        <form className='create-event-form' onSubmit={this.handleSubmit}>
        <div className='create-event-title-container'>
          <label className='create-event-title'>Title<p>(required)</p></label>
          <input type="text" value={this.state.title} onChange={this.handleChange('title')}/>
        </div> 
        <div className='create-event-dt-container'>
          <label className='create-event-dt'>Date and time</label>
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
          />
        </div>
        </form>
        
          <h2>{moment().format("MMM Do YY")}</h2>
      </div>
    );
  }
}

export default withRouter(CreateEventForm);