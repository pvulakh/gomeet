import React from 'react';
import ReactDOM from 'react-dom';
import { login, signup, logout } from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
   
    //TESTING
    window.login = login;
    window.signup = signup;
    window.logout = logout;
    //TESTING

    ReactDOM.render(<h1>Meet GoMeet!</h1>, root);
});