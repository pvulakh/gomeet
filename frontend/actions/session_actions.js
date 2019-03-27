import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

export const receiveCurrentUser = user => {
    return {
        type: RECEIVE_CURRENT_USER,
        user
    };
};

export const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    };
};

export const signup = user => dispatch => {
    return SessionAPIUtil.signup(user).then(user => dispatch(receiveCurrentUser(user)));
};

export const login = user => dispatch => {
    return SessionAPIUtil.login(user).then(user => dispatch(receiveCurrentUser(user)));
};

export const logout = () => dispatch => {
    return SessionAPIUtil.logout().then(() => dispatch(logoutCurrentUser()));
};