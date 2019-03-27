import React from 'react';
import NavBarContainer from './navbar_container';
import Footer from './footer';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import AuthRoute from '../util/route_util';

const App = () => (
    <div>
        <NavBarContainer />
        <AuthRoute path='/login' component={LoginFormContainer} />
        <AuthRoute path='/register' component={SignupFormContainer} />
         this is the main part of the app 
        <Footer />    
    </div>
);

export default App;