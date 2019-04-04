import React from 'react';

const GSEventsIndexItem = props => {
  
  return (
    <div id='events-item'>
      <div>{props.event.start_time.toUpperCase()}</div>
      <div className='event-title'>{props.event.name}</div>
      <div className='events-loc'>
        <i className="fas fa-map-marker-alt"></i>
        <div> App Academy</div>
      </div>
      <div>{props.event.description}</div>
    </div>
  );
};

export default GSEventsIndexItem;