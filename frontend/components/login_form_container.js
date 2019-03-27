import { connect } from 'react-redux';
import { login } from '../actions/session_actions';
import LoginForm from './login_form';

const msp = state => {
    return { 
        user: { email:'', password:'' } 
    };
};

const mdp = dispatch => {
    return {
        login: user => dispatch(login(user))
    };
};

export default connect(msp, mdp)(LoginForm);

