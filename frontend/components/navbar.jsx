import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        let rightNav;
        if (!this.props.currentUser) {
            rightNav = (
            <div>
                <Link to='/login'>Log in</Link>
                <Link to='/register'>Sign up</Link>
            </div>
            );
        } else {
            rightNav = (
            <div>
                <p>Explore</p>
                <button onClick={this.props.logout}>Log Out</button>
            </div>);
        }
        return (
            <div>
                <p>logo</p>{/* <img src="" alt=""/> */}
                <p>Start a new group</p>{/*link to create group */}
                <div>{rightNav}</div>
            </div>
        );
    }
}

export default NavBar;