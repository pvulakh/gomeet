import React from 'react';
import NavBarContainer from './nav/navbar_container';
import Splash from './splash';
import Footer from './footer';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import AuthRoute from '../util/route_util';
import { Route } from 'react-router-dom';

const App = () => (
    <div>
        <NavBarContainer />
        <AuthRoute path='/login' component={LoginFormContainer} />
        <AuthRoute path='/register' component={SignupFormContainer} />
        <Route exact path='/' component={Splash} />
        <Footer />    
    </div>
);

export default App;