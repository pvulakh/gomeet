import React from 'react';
import { withRouter, Route, Redirect } from 'react-router-dom';
import moment from 'moment';
import timezone from 'moment-timezone';
import DatePicker from 'react-datepicker';

class CreateEventForm extends React.Component {
  constructor(props) {
    super(props);
    // description, lat, lng, startTime, endTime, 
    this.state = this.props.event;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEndTime = this.handleEndTime.bind(this);
  }
  
  componentDidMount() {
    this.setState({ date: '', endTime: '2 hours' });
    if (!this.props.groupTitle) {
      this.props.fetchGroup(this.props.groupId);
    }
  }

  handleChange(field) {
    return e => {
      return this.setState({[field]: e.target.value});
    };
  }

  handleDate(field) {
    return date => {
      return this.setState({[field]: date });
    };
  }

  handleEndTime(e) {
    debugger
    return e.target.selectedIndex === 4 ? this.setState({ endDate: this.state.startDate }) : this.handleChange('endTime');
  }

  handleSubmit(e) {
    e.preventDefault();
    // create formData obj and put this.state into its respective properties

    // use this.state.startDate/this.state.startTime to create the actual dateTime objects that we'll want to push into db
    // for formData.append('event[startTime]') and fromData.append('event['endTime'])
    // debugger
    this.props.createEvent(this.props.groupId, this.state).then(() => this.props.history.push(`/groups/${this.props.groupId}`));;
    // history.push to events show page once built out; for now, goes to group show
  }

  render() {
    if (!this.props.groupTitle) {
      return null;
    }

    let endTime, endSection;
    if (this.state.endDate) {
      endTime = null;
      endSection = (
        <div className='create-event-dt-container'>
          <label className='create-event-dt'>Date and time</label>
          <DatePicker
            className='date-pick'
            selected={this.state.endDate}
            onChange={this.handleDate('endDate')}
          />
          <input type='time' value={this.state.endTime} onChange={this.handleChange('endTime')} />
        </div>
      );
    } else {
      endTime = (
        <select value={this.state.endTime} onChange={this.handleEndTime}>
          <option value='360000'>1 hour</option>
          <option value='540000'>1.5 hours</option>
          <option value='72000'>2 hours</option>
          <option value='1080000'>3 hours</option>
          <option value='custom'>Set an end time...</option>
        </select>
      );
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
            <input type="text" value={this.state.name} onChange={this.handleChange('name')}/>
          </div> 
          <div className='create-event-dt-container'>
            <label className='create-event-dt'>Date and time</label>
            <DatePicker
              className='date-pick'
              selected={this.state.startDate}
              onChange={this.handleDate('startDate')}
            />
            <input type='time' value={this.state.startTime} onChange={this.handleChange('startTime')} />
          </div>
          {endTime}
          {endSection}
            {/* <h2>{moment().format("MMM Do YY")}</h2> */}
          <div className='create-event-description'>
            <label htmlFor='event-description'>Description</label>
            <p>Let your attendees know what to expect, including the agenda, what they need to bring, and how to find the group.</p>
            <textarea id='event-description' onChange={this.handleChange('description')} value={this.state.description}></textarea>
          </div>
          <button onClick={this.handleSubmit}>Publish</button>
        </form>
      </div>
    );
  }
}

export default withRouter(CreateEventForm);