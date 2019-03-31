import { connect } from 'react-redux';
import Footer from './footer';
import { withRouter } from 'react-router-dom';
import { logout, login } from '../../actions/session_actions';

const msp = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        pathname: ownProps.location.pathname
    };
};

const mdp = dispatch => {
    return {
        logout: () => dispatch(logout()),
        login: user => dispatch(login(user))
    };
};

export default withRouter(connect(msp, mdp)(Footer));