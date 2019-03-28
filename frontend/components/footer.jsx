import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.component {
    render() {
        let userAuth;
        if (this.props.pathname === '/login') {
            userAuth = 'login';
        } else if (this.props.pathname === '/register') {
            userAuth = 'register';
        } else {
            userAuth = '';
        }

        return (
            <div className='footer' id={userAuth}>
                <div>
                    <div className='create-group'><Link to='/create'>Start a new group</Link></div>
                    <div className='footer-item'>
                        <h4>Your Acount</h4>
                        <div>
                            <Link to='/register'>Sign up</Link>
                            <Link to='/login'>Log in</Link>
                        </div>
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