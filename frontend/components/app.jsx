import React from 'react';
import NavBar from './navbar';
import Footer from './footer';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import { Route } from 'react-router-dom';

const App = () => (
    <div>
        <Route path='/login' component={LoginFormContainer} />
        <Route path='/signup' component={SignupFormContainer} />
        <NavBar />
         this is the main part of the app 
        <Footer />    
    </div>
);

export default App;