import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
//const NavBar = () => {
    render() {
        let rightNav;
        if (!this.props.currentUser) {
            rightNav = (
            <div>
                <Link to='/login'>Log in</Link>
                <Link to='/signup'>Sign up</Link>
            </div>
            );
        } else {
            rightNav = (
            <div>
                <p>Explore</p>
                <button onClick={this.props.logout}>Log Out</button>
            </div>);
        }
        //debugger
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