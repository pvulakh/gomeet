import React from 'react';
import { Route, Link } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.user;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(field) {
        return e => this.setState({ [field]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state);
    }

    render() {
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
                <ul>{this.props.errors}</ul>

                <h2>Sign up</h2>
                <button onClick={this.props.demoUser}>Demo User</button>

                <form onSubmit={this.handleSubmit}>
                    <label>Your name:</label>
                    <input type="text" value={this.state.name} onChange={this.handleChange('name')} />

                    <label>Email address:</label>
                    <input type="text" value={this.state.email} onChange={this.handleChange('email')} />

                    <label>Password:</label>
                    <input type="password" value={this.state.password} onChange={this.handleChange('password')} />

                    <p>Location element</p>
                    <input type="submit" value='Continue' />
                </form>

                <p>Already a member? 
                    <Link to='/login'>Log in.</Link>
                </p>
            </div>
        );
    }
}



export default SignupForm;