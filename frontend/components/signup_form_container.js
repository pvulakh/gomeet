import { connect } from 'react-redux';
import { signup } from '../actions/session_actions';
import SignupForm from './signup_form';

const msp = state => {
    return {
        user: { name:'', email: '', password: '', lat: 42.0, lng: 43.0 },
        currentUser: state.entities.users[state.session.id],
        errors: Object.values(state.errors)
    };
};

const mdp = dispatch => {
    return {
        signup: user => dispatch(signup(user))
    };
};

export default connect(msp, mdp)(SignupForm);