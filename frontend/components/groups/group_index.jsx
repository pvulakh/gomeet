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
      <ul>{groups}</ul>
    );
  }
}

export default GroupIndex;