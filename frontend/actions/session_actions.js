import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = user => {
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser: user
    };
};

export const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    };
};

export const receiveErrors = errors => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    };
};


export const demoUser = () => {
    return login({
        email: 'demo_user@gomeet.com',
        password: 'demo_user'
    });
};

export const signup = user => dispatch => {
    return SessionAPIUtil.signup(user).then(
        user => dispatch(receiveCurrentUser(user)),
        errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const login = user => dispatch => {
    return SessionAPIUtil.login(user).then(
        user => dispatch(receiveCurrentUser(user)),
        errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const logout = () => dispatch => {
    return SessionAPIUtil.logout().then(() => dispatch(logoutCurrentUser()));
};

