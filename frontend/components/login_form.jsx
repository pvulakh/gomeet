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
        this.setState({ emptyFields: {}}, () => {
            let newEmptyFields = {};
            if (this.state.user.email === '') {
                newEmptyFields = merge({}, this.state.emptyFields, { email: "Please enter your email address." });
            }

            if (this.state.user.password === '') {
                newEmptyFields = merge(newEmptyFields, this.state.emptyFields, { password: "Please enter your password." });
            }

            this.setState({ emptyFields: newEmptyFields });
            if (Object.values(this.state.emptyFields).length === 0) {
                this.handleSubmit();
            }
        });
    }

    handleSubmit() {
        this.props.login(this.state.user);
    }
    
    render() {
        let emptyError;
        let errors;

        if (Object.values(this.state.emptyFields).length > 0) {
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
                <Link to='/register'>Sign up</Link>

                <form onSubmit={this.verifySubmit}>

                <label>Email address:</label>
                <input type="text" value={this.state.user.email} onChange={this.handleChange('email')}/>
                <p>{this.state.emptyFields.email}</p>

                <label>Password:</label>
                <input type="password" value={this.state.user.password} onChange={this.handleChange('password')}/>
                <p>{this.state.emptyFields.password}</p>

                <input type="submit" value='Log in'/>
                </form>
            </div>
        );
    }
}
  


export default LoginForm;