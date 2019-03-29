import React from 'react';

const DropDown = props => {
    return (
        <div className='dd'>
            <div className='flag'></div>
            <div className='dd-comp'>
                <button onClick={props.logout}>Log Out</button>
            </div>
        </div>
    );
};

export default DropDown;