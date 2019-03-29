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

        if (Object.values(this.state.emptyFields).length > 0) {
            emptyError = "Sorry, there was a problem. You'll find more details highlighted below.";
        }

        return (
            <div className='form-page'>
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
                <p>{emptyError}</p>
                
                <div className='form-box'>
                    <div className='form-top'>
                        <h2>Log in <img className="icon" src="https://secure.meetupstatic.com/s/img/09300654065624139187/icon/icon_padlock.gif" alt="[lock icon]"></img></h2>
                        <div className='small'>
                            <p className='register-text'>Not registered with us yet? 
                            <Link to='/register' className='form-link' onClick={() => this.setState({ emptyFields: {} })}> Sign up</Link></p> 
                        </div>
                    </div>

                    <form onSubmit={this.verifySubmit} className='form'>

                    <label>Email address:</label>
                    <input type="text" value={this.state.user.email} onChange={this.handleChange('email')}/>
                    <p>{this.state.emptyFields.email}</p>

                    <label>Password:</label>
                    <input type="password" value={this.state.user.password} onChange={this.handleChange('password')}/>
                    <p>{this.state.emptyFields.password}</p>

                    <input type="submit" value=' Log in ' id='button'/>
                    </form>
                    <div className='demo-login'>
                        <button onClick={this.props.demoUser} className="demo-button">Log in with Demo User</button>
                    </div>
                </div>
            </div>
        );
    }
}
  


export default LoginForm;