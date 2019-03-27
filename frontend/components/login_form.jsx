import React from 'react';
import { Route, Link } from 'react-router-dom';
import { merge } from 'lodash';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            user: this.props.user, 
            emptyFields: {}
        };
        this.verifySubmit = this.verifySubmit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(field) {
        return e => {
            const newState = merge({}, this.state.user, { [field]: e.target.value });
            this.setState({ user: newState});
        };
    }

    verifySubmit(e) {
        e.preventDefault();
        if (this.state.user.email === '') {
            const newEmptyFields = merge({}, this.state.emptyFields, { email: true })
            this.setState({ emptyFields: newEmptyFields });
        }

        if (this.state.user.password === '') {
            const newEmptyFields = merge({}, this.state.emptyFields, { password: true })
            this.setState({ emptyFields: newEmptyFields});
        }

        if (!this.state.emptyFields.email && !this.state.emptyFields.password) {
            this.handleSubmit(e);
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state.user);
    }
    
    render() {
        let emptyEmail;
        let emptyPassword;
        let emptyError;
        let errors;

        if (this.state.emptyFields.email) {
            emptyEmail = "Please enter your email address.";
            emptyError = "Sorry, there was a problem. You'll find more details highlighted below.";
        }
        if (this.state.emptyFields.password) {
            emptyEmail = "Please enter your password.";
            emptyError = "Sorry, there was a problem. You'll find more details highlighted below.";
        }

        if (emptyError) {
            errors = emptyError;
        } else {
            errors = this.props.errors;
        }

        return (
            <div>
                <Route
                    path="/"
                    render={
                        () => {
                            if (this.props.currentUser) {
                                return < Redirect to="/" />
                            }
                        }
                    }
                />
                <p>{errors}</p>

                <h2>Log in</h2>
                <p>Not registered with us yet?</p>
                <Link to='/signup'>Sign up</Link>

                <form onSubmit={this.verifySubmit}>

                <label>Email address:</label>
                <input type="text" value={this.state.user.email} onChange={this.handleChange('email')}/>
                <p>{emptyEmail}</p>

                <label>Password:</label>
                <input type="password" value={this.state.user.password} onChange={this.handleChange('password')}/>
                <p>{emptyPassword}</p>

                <input type="submit" value='Log in'/>
                </form>
            </div>
        );
    }
}
  


export default LoginForm;