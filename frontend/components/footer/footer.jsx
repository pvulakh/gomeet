import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render() {
        let footerNav;
        let footerFlex;
        if (this.props.currentUser) {
            footerNav = (
                <div className='logout'>
                    <button onClick={this.props.logout}>Log Out</button>
                </div>);
            footerFlex = 'footer-flex';
        } else if (this.props.pathname === '/login') {
            footerNav = (
                <div className='login'>
                    <Link to='/login'>Log in</Link>
                </div>);
            footerFlex = 'footer-flex';
        } else { //
            footerNav = (
                <div className='footer-item'>
                    <h4>Your Acount</h4>
                    <div>
                        <Link to='/register'>Sign up</Link>
                        <Link to='/login'>Log in</Link>
                    </div>
                </div>
            );
            footerFlex = '';
        }

        let userAuth;
        if (this.props.pathname === '/login') {
            userAuth = 'footer-login';
        } else if (this.props.pathname === '/register') {
            userAuth = 'footer-register';
        } else {
            userAuth = '';
        }

        return (
            <div className='footer' id={userAuth}>
                <div>
                    <div className={`footer-top ${footerFlex}`}>
                        <div className='create-group'><Link to='/create'>Start a new group</Link></div>
                        {footerNav}
                    </div>

                    <div className='footer-item' className='follow'>
                        <h4>Follow us</h4>
                        <div>
                            <a href="https://github.com/pvulakh">
                                <i className="fab fa-github" aria-hidden="true"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/polinavulakh/">
                                <i className="fab fa-linkedin" aria-hidden="true"></i>
                            </a>
                            <a href="https://twitter.com/polinavulakh">
                                <i className="fab fa-twitter" aria-hidden="true"></i>
                            </a>
                            <a href="#">
                                <i className="fa fa-user-circle" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;