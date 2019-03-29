import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        let authNav;
        if (!this.props.currentUser) {
            authNav = (
            <>
                <div className='has-border'><Link to='/login' className='link-hover'>Log in</Link></div>
                <div><Link to='/register' className='link-hover'>Sign up</Link></div>
            </>); 
        } else {
            authNav = (
            <div>
                <p>Explore</p>
                <button onClick={this.props.logout}>Log Out</button>
            </div>);
        }

        let userAuth;
        if (this.props.pathname === '/login') {
            userAuth = 'login';
        } else if (this.props.pathname === '/register') {
            userAuth = 'register';
        } else {
            userAuth = '';
        }

        return (
            <div className='nav-bar' id={userAuth}>
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