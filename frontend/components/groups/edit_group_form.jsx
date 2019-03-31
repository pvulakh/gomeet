import React from 'react';
import { withRouter, Route, Redirect } from 'react-router-dom';

class EditGroupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.group;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchGroup(this.props.match.params.groupId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.group.id != this.props.match.params.groupId) {
      this.props.fetchGroup(this.props.match.params.groupId);
    }
  }

  handleChange(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state).then(() => this.props.history.push('/'));
  }

  render() {
    if (!this.props.group) {
      return null;
    }
    
    return (
      <div className='edit-group-page'>
        <Route
          path="/create"
          render={
            () => {
              if (!this.props.currentUser) {
                return <Redirect to='/login' />
              } else if (this.props.currentUser != this.props.group.creator_id) {
                return <Redirect to="/" />
              }
            }
          }
        />
        <h1>{this.state.title}</h1>
        
        <form className='update-group-form'>
          <h3>About this GoMeet Group</h3>

          <div className='update-group-title'>
            <label>GoMeet Group name</label>
              <input type="text" value={this.state.title} onChange={this.handleChange('title')}/>
          </div>

          <div className='update-group-description'>
            <label>GoMeet group description</label>
            <p>What is this GoMeet's purpose? Who should join? Why?</p>
            <textarea value={this.state.description} onChange={this.handleChange('description')} />
          </div>

          <h3>Where</h3>
          <div className='update-group-location'>
            <div className='update-group-loc-vals'>
              <div>
                <label className='country'>Country</label>
                <span>USA</span>
              </div>
              <div>
                <label className='zip'>ZIP</label>
                <input type="text" id="zip-val" defaultValue='10001' />
              </div>
            </div>
            <p>Only city and town changes to your GoMeet are permitted.</p>
          </div>
          
          <h3>GoMeet group logo</h3>
          <div>
            <label>Upload a new GoMeet photo</label>
            <input name="groupPhoto" id="groupPhotoFile" type="file" tabIndex="20"></input>
          </div>
          <input type="submit" value='Save' className='update-button'/>
        </form>
      </div>
    );
  }
}

export default withRouter(EditGroupForm);