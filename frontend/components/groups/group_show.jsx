import React from 'react';
import { Link } from 'react-router-dom';

class GroupShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { creator: null };
  }

  componentDidMount() {
    this.props.fetchGroup(this.props.match.params.groupId);
  }

  componentDidUpdate(prevProps) {
    if (Object.values[prevProps.users] != Object.values[this.props.users]){
      this.props.fetchUser(this.props.group.creator_id);
      //this.setState({ creator: this.props.users[this.props.group.creator_id]});
    }
    //this.setState({ creator: this.props.users[this.props.group.creator_id] });
  }

  render() {
    //debugger
    if (!this.props.group) {
      return null;
    }

    const creator = this.props.users[this.props.group.creator_id];
    let button;

    if (this.props.currentUser.id === this.props.group.creator_id) {
      button = <Link to={`/groups/${this.props.group.id}/manage`}>Manage</Link>;
    } else {
      button = 'Join Group';
    }

    let photo;
    if (this.props.group && this.props.group.photo) {
      photo = <img src={this.props.group.photo} />
    }

    return (
      <div className='group-show-page'>
        <div className='group-show-header'>
          <div>
            {photo}
          </div>
          <div className='group-show-header-text'>
            <h1>{this.props.group.title}</h1>
            <div>
              <i className="fas fa-map-marker-alt"></i>
              <div> New York, NY</div>
            </div>
            <div>
              <i className="fas fa-user-friends"></i>
              <div>[] members</div>
            </div>
            <div>
              <i className="fas fa-user-alt"></i>
              <div>Organized by <p>{creator.name}</p></div>
            </div>
          </div>
        </div>
        <div className='group-show-bottom'>
          <div className='group-show-right'>
            <div className='group-show-stripe'>
              <div>
                <div>About</div>
                <div>Events</div>
              </div>
              <div>
                <button>{button}</button> 
              </div>
            </div>
            <div className='group-show-main'>
              <div className='group-show-description'>
                <h2>What we're about</h2>
                <div>{this.props.group.description}</div>
              </div>
              <div className='group-show-events-'>
                <div className='group-show-events-header'>
                  <h3>Upcoming events</h3>
                  <button>See all</button>
                </div>
                <div>
                  events will go here
                </div>
              </div>
            </div>
          </div>
          <div className='group-show-left'>
            <div className='group-org'>
              <h3>Organizer</h3>
              <div>
                <div>org-avatar</div>
                <div>{creator.name}</div>
              </div>
            </div>
            <div className='group-show-members'>
              <h3>Members</h3>
              <div>
                member avatars will go here
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GroupShow;
