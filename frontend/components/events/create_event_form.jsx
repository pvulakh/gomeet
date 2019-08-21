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
    this.setState({ date: '' });
    this.handleSubmit = this.handleSubmit.bind(this);
    }
  
  componentDidMount() {
    if (!this.props.groupTitle) {
      this.props.fetchGroup(this.props.groupId);
    }
  }

  handleChange(field) {
    return e => {
      debugger
      return this.setState({[field]: e.target.value});
    };
  }

  handleDate(field) {
    return date => {
      return this.setState({[field]: date });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    // create formData obj and put this.state into its respective properties

    // use this.state.startDate/this.state.startTime to create the actual dateTime objects that we'll want to push into db
    // for formData.append('event[startTime]') and fromData.append('event['endTime'])
    debugger
    this.props.createEvent(this.props.groupId, this.state).then(() => this.props.history.push(`/${this.props.groupId}`));;
    // history.push to events show page once built out; for now, goes to group show
  }

  render() {
    if (!this.props.groupTitle) {
      return null;
    }
    debugger

    let endDate, endSection;
    if (endDate) {
      endSection = (
        // <div>
          // <DatePicker
          //   className='date-pick'
          //   selected={this.state.endDate}
          //   onChange={this.handleDate('endDate')}
          // />
          {/* <input type='time' value={this.state.endTime} onChange={this.handleChange('endTime')} /> */}
        // </div>
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
        </form>
        <select onChange={this.handleChange('endTime')}> 
          {/* e.target[e.target.selectedIndex].value to get the value of the option */}
          <option value='1 hour'>1 hour</option>
          <option value='1.5 hours'>1.5 hours</option>
          <option value='2 hours' selected>2 hours</option>
          <option value='3 hours'>3 hours</option>
          <option onClick={() => endDate = true} value='end time'>Set an end time...</option>
        </select>
          {/* <h2>{moment().format("MMM Do YY")}</h2> */}
      </div>
    );
  }
}

export default withRouter(CreateEventForm);