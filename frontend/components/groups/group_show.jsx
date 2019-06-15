import React from 'react';
import { Link } from 'react-router-dom';
import GSEventsIndexItem from './gs_events_index_item';


class GroupShow extends React.Component {
  componentDidMount() {
    debugger
    this.props.fetchGroup(this.props.match.params.groupId);
    this.joinGroup = this.joinGroup.bind(this);
    this.leaveGroup = this.leaveGroup.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.group.id != this.props.group.id) {
      this.props.fetchGroup(this.props.match.params.groupId);
    }
  }

  joinGroup(e) {
    e.preventDefault();
    this.props.joinGroup(this.props.group.id);
  }

  leaveGroup(e) {
    e.preventDefault();
    this.props.leaveGroup(this.props.group.id);
  }

  render() {
    if ((!this.props.group) || (!this.props.creator)) {
      return null;
    }

    const creator = this.props.creator;
    let button;

    if ((this.props.currentUser) && (this.props.currentUser.id === this.props.group.creator_id)) {
      button = <Link to={`/groups/${this.props.group.id}/manage`} className='group-show-button'>Manage</Link>;
    } else if ((this.props.currentUser) && (!this.props.group.members.includes(this.props.currentUser.id))) {
      button = <button onClick={this.joinGroup} className='group-show-button'>Join this group</button>;
    } else if (this.props.currentUser) {
      button = <button onClick={this.leaveGroup} className='group-show-button'>Leave this group</button>;
    } else {
      button = <Link to='/login' className='group-show-button'>Join this group</Link>;
    }

    let photo;
    if (this.props.group && this.props.group.photo) {
      photo = <div id='group-photo-wrapper'><img src={this.props.group.photo} /></div>;
    }

    let avatar;
    if (creator && creator.photo) {
      avatar = <img src={creator.photo} className='avatar'/>
    }
    
    const memberCount = this.props.group.members.length;
    const memberGrammar = memberCount === 1 ? 'member' : 'members';
    const memberAvatars = this.props.group.member_avatars.map((avatar, idx) => <li key={idx}><img src={avatar} className='avatar'/></li>);
    const events = this.props.group.events.map(eventId => {
      const event = this.props.events[eventId];
      return (
        <GSEventsIndexItem
          key={event.id}
          event={event}
          />
      );
    });

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
              <div>{memberCount} {memberGrammar}</div>
            </div>
            <div>
              <i className="fas fa-user-alt"></i>
              <div>Organized by {creator.name}</div>
            </div>
          </div>
        </div>
        <div className='stripe-and-main'>
          <div className='group-show-stripe'>
            <div>
              <div className='about-events'>
                <div className='about-tab'>About</div>
                <div className='events-tab'>Events</div>
              </div>
              <div className='membership-button-div'>
                {button}
              </div>
            </div>
          </div>
          <div className='group-show-bottom'>
            <div>
              <div className='group-show-right'>
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
                      <ul id='events-ul'>{events}</ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className='group-show-left'>
                <div className='group-org'>
                  <h3>Organizer</h3>
                  <div>
                    <div>{avatar}</div>
                    <div>{creator.name}</div>
                  </div>
                </div>
                <div className='group-show-members'>
                  <h3>Members</h3>
                  <div>
                    <ul>{memberAvatars}</ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GroupShow;
