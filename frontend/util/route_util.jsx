
import React from 'react';
import { withRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const msp = state => {
    return {
        loggedIn: Boolean(state.session.id)
    };
};

const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        !loggedIn ? (
            <Component {...props} />
        ) : (
                <Redirect to='/' />
            )
    )} />
);

export default withRouter(connect(msp, null)(Auth));
