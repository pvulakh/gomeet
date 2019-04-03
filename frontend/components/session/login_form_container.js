import { connect } from 'react-redux';
import { login, demoUser } from '../../actions/session_actions';
import LoginForm from './login_form';
import { withRouter } from 'react-router-dom';


const msp = state => {
    return { 
        user: { email:'', password:'' },
        currentUser: state.entities.users[state.session.id],
        errors: Object.values(state.errors)
    };
};

const mdp = dispatch => {
    return {
        login: user => dispatch(login(user)),
        demoUser: () => dispatch(demoUser())
    };
};

export default withRouter(connect(msp, mdp)(LoginForm));

