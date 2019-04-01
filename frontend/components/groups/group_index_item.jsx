import React from 'react';
import { Link } from 'react-router-dom';

const GroupIndexItem = props => {
    let photo;
    if (props.group.photo) {
        photo = <img src={props.group.photo} />;
    }
    return (
        <div>
            <Link to={`/groups/${props.group.id}`}>{props.group.title}</Link>
            {photo}
        </div>  
    ); 
}

export default GroupIndexItem;