import React from 'react';
import { Link } from 'react-router-dom';
import DropDown from './dropdown';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDropDown: false
        };

        this.showDropDown = this.showDropDown.bind(this);
        this.closeDropDown = this.closeDropDown.bind(this);
    }

    showDropDown(e) {
        e.preventDefault();
        this.setState({ showDropDown: true }, () => {
            document.addEventListener('click', this.closeDropDown);
        });
    }

    closeDropDown(e) {
        e.preventDefault();
        this.setState({ showDropDown: false }, () => {
            document.removeEventListener('click', this.closeDropDown);
        });
    }

    render() {
        let dropdown;
        if (this.state.showDropDown) {
            const { logout } = this.props;
            dropdown = <DropDown logout={logout} />;
        }

        let authNav;
        if (!this.props.currentUser) {
            authNav = (
                <>
                    <div className='has-border nav-link'><Link to='/login' className='link-hover'>Log in</Link></div>
                    <div><Link to='/register' className='link-hover nav-link'>Sign up</Link></div>
                </>);
        } else {
            authNav = (
                <>
                    <div className='has-border nav-link'><Link to='/find/gomeets'>Explore</Link></div>
                    <div>
                        <div className='profile-dd' onClick={this.showDropDown}>
                            <i className="far fa-user-circle"></i>
                            <i className="fas fa-angle-down"></i>
                        </div>
                    </div>
                </>);
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
                <Link to='/' className='logo'>GoMeet</Link>

                <div className='right-nav'>
                    <Link to='/create'>Start a new group</Link>
                    <div className='auth-nav'>{authNav}</div>
                    {dropdown}
                </div>
            </div>
        );
    }
}

export default NavBar;