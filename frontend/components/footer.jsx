import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
    <div>
        <Link to='/create'>Start a new group</Link>
        <div>
            <h4>Your Acount</h4>
            <Link to='/register'>Sign up</Link>
            <Link to='/login'>Log in</Link>
        </div>

        <div>
            <h4>Follow us</h4>
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
);

export default Footer;