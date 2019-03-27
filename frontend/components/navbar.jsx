import React from 'react';
import { Route } from 'react-router-dom';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';

class NavBar extends React.Component {
//const NavBar = () => {
    render() {
        let rightNav;
        if (this.props.currentUser) {
            rightNav = (
            <div>
                <Route path='/login' component={LoginFormContainer} />
                <Route path='/signup' component={SignupFormContainer} />
            </div>
            );
        } else {
            rightNav = (
            <div>
                <p>Explore</p>
                <button onClick={this.props.logoutCurrentUser}>Log Out</button>
            </div>);
        }

        return (
            <div>
                <p>logo</p>{/* <img src="" alt=""/> */}
                <p>Start a new group</p>{/*link to create group */}
                {rightNav}
            </div>
        );
    }
}

export default NavBar;