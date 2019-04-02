import React from 'react';
import GroupIndexItem from './group_index_item';

class GroupIndex extends React.Component {
  componentDidMount() {
    this.props.fetchGroups();
  }

  render() {
    if (this.props.groups.length === 0) {
      return null;
    }

    const groups = this.props.groups.map(group => <GroupIndexItem key={group.id} group={group} />);
    return (
      <div className='group-index-page'>
          <div className='group-index-header'>
            <h2>Find your next event</h2>
            <div>
              <div>[] events in your groups</div>
              <div>[] events near you</div>
            </div>
          </div>
        <div className='group-index-your-groups'>
          <h4>Your groups</h4>
          <ul className='grid-container'>{groups}</ul>
        </div>
      </div>
    );
  }
}

export default GroupIndex;