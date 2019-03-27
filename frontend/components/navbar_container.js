import { connect } from 'react-redux';
import NavBar from './navbar';
import { logoutCurrentUser } from '../actions/session_actions';

const msp = state => {
    return {
        currentUser: state.entities.users[state.session.id]
    };
};

const mdp = dispatch => {
    return {
        logout: () => dispatch(logoutCurrentUser())
    };
};

export default connect(msp, mdp)(NavBar);