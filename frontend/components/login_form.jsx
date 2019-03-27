import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
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
        this.props.login(this.state);
    }
    
    render() {
        return (
            <div>
                <h2>Log in</h2>
                <p>Not registered with us yet?</p>
                <Link to='/signup'>Sign up</Link>

                <form onSubmit={this.handleSubmit}>

                <label>Email address:</label>
                <input type="text" value={this.state.email} onChange={this.handleChange('email')}/>

                <label>Password:</label>
                <input type="password" value={this.state.password} onChange={this.handleChange('password')}/>

                <input type="submit" value='Log in'/>
                </form>
            </div>
        );
    }
}
  


export default LoginForm;