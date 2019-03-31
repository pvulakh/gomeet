import React from 'react';
import NavBarContainer from './nav/navbar_container';
import Splash from './splash';
import FooterContainer from './footer/footer_container';
import CreateGroupFormContainer from './groups/create_group_form_container';
import EditGroupFormContainer from './groups/edit_group_form_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import GroupIndexContainer from './groups/group_index_container';
import AuthRoute from '../util/route_util';
import { Route } from 'react-router-dom';

class App extends React.Component {
    componentDidMount() {
        document.title = "GoMeet";
    }

    render() {
        return (
            <div>
                <NavBarContainer />
                <AuthRoute path='/login' component={LoginFormContainer} />
                <AuthRoute path='/register' component={SignupFormContainer} />
                <Route path='/create' component={CreateGroupFormContainer} />
                <Route path="/groups/:groupId/manage" component={EditGroupFormContainer} />
                <Route path='/find/gomeets' component={GroupIndexContainer} />
                <Route exact path='/' component={Splash} />
                <FooterContainer />
            </div>
        );
    }
} 

export default App;