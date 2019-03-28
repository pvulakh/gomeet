import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        let authNav;
        if (!this.props.currentUser) {
            authNav = (
            <div>
                <Link to='/login'>Log in</Link>
                <Link to='/register'>Sign up</Link>
            </div>
            ); 
        } else {
            authNav = (
            <div>
                <p>Explore</p>
                <button onClick={this.props.logout}>Log Out</button>
            </div>);
        }
        return (
            <div className='nav-bar'>
                <Link to='/'>logo</Link>

                <div className='right-nav'>
                    <Link to='/create'>Start a new group</Link>
                    <div className='auth-nav'>{authNav}</div>
                </div>
            </div>
        );
    }
}

export default NavBar;