import React from 'react';
import { withRouter, Route, Redirect } from 'react-router-dom';

class CreateGroupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.group;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return e => this.setState({[field]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state).then(() => this.props.history.push('/'));
  }

  render() {
    return (
      <div className='create-page'>
        <Route
          path="/create"
          render={
            () => {
              if (!this.props.currentUser) {
                return <Redirect to="/login" />
              }
            }
          }
        />

        <div className='create-msg'>
          <img src="https://secure.meetupstatic.com/img/start_v2/dweb_hero.jpg" />
          <div className='create-text'>
            <h2>Start a new GoMeet</h2>
            <h3>We'll help you find the right people to make it happen.</h3>
          </div>
        </div>

        <form onSubmit={this.handleSubmit} className='create-form'>
          <div className='create-location'>
            <img src="https://secure.meetupstatic.com/s/img/5771697722992842330638/start_v2/globe.svg"></img>
            <div className='create-loc-text'>
              <div className='create-step'>
                step 1 of 4
              </div>
              <h5 className='create-group-heading'>What's your new GoMeet Group's hometown?</h5>
              <div className='city'>
                <input type='text' defaultValue='New York, NY'/>(<div>change location</div>)
              </div>
            </div>
          </div>

          <div className='create-main'>
            <img src="https://secure.meetupstatic.com/s/img/545971442246927/start_v2/tag.svg"></img>
            <div className='create-main-text'></div>
              <div className='create-step'>
                step 2 of 4
              </div>
              <h5 className='create-group-heading'>What will your GoMeet's name be?</h5>
              <div className='create-title'>
                <input type='text' value={this.state.title} placeholder="example: New York Hiking GoMeet" onChange={this.handleChange('title')}/>
              </div>
              <div className='create-step'>
                  step 3 of 4
              </div>
              <h5 className='create-group-heading'>Describe who should join, and what your GoMeet will do.</h5>
              <div className='create-description'>
                  <input type='text' value={this.state.description} onChange={this.handleChange('description')}/>
              </div>
          </div>
          <div className='create-disclaimer'>
                  <img src="https://secure.meetupstatic.com/s/img/533695931247066883484/start_v2/people.svg"></img>
            <div className='create-disc-text'></div>
              <div className='create-step'>
                step 4 of 4
              </div>
              <h5 className='create-group-heading'>What it means to be a GoMeet</h5>
              <ul>
                <li>Real, in-person conversations</li>
                <li>Open and honest intentions</li>
                <li>Always safe and respectful</li>
                <li>Put your members first</li>
              </ul>
              <h6>We review all GoMeets based on our Community Guidelines.</h6>
          </div>
          <input type="submit" value="Agree & Continue" className='create-button'/>
        </form>
      </div>
    );
  }
}

export default withRouter(CreateGroupForm);