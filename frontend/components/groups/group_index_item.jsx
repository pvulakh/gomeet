import React from 'react';
import { Link } from 'react-router-dom';

const GroupIndexItem = props => {
    let photo;
    if (props.group.photo) {
        photo = <img src={props.group.photo}/>;
    }

    const memberCount = props.group.members.length;
    return (
        <div className='grid-item'>
            <Link to={`/groups/${props.group.id}`} className='group-title'>
                <h3>{props.group.title}</h3>
                <p>{memberCount} Members</p>
            </Link>
            {photo}
        </div>  
    ); 
}

export default GroupIndexItem;