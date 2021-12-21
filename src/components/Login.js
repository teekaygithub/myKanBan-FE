import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { loginUser } from '../actions/authActions';
import { connect } from 'react-redux';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:"",
            password:""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const credentials = {
            "username": this.state.username,
            "password": this.state.password
        }
        this.props.loginUser(credentials);
    }

    componentDidUpdate(prevProps) {
        if (this.props.userauth.isLoggedIn && this.props.userauth.loading === false) {
            console.log("Logged in, redirecting to dashboard");
            this.props.history.push("/dashboard")
        }
    }

    render () {
        return (
            <div id="login-container">
                <div id="login-banner">
                    <h3>Thank you for trying out myKanBan!</h3>
                    <p>Feel free to register for an account, or use the following credential below:</p>
                    <p>User e-mail address: <strong>test@test.com</strong></p>
                    <p>Password: <strong>1234</strong></p>
                </div>
                
                <div id="login-form">
                    <h3>Log In to MyKanBan</h3>
                    <form>
                        <input 
                            type="email"
                            name="username"
                            placeholder='Email Address'
                            onChange={this.handleChange}
                            value={this.state.email} />
                        <input 
                            type="password"
                            name="password"
                            placeholder='Password'
                            onChange={this.handleChange}
                            value={this.state.password} />
                        <button 
                            type="submit" 
                            onClick={this.handleSubmit}>Login</button>
                    </form>
                </div>
            </div>
        );
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    userauth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    userauth: state.userauth
});

function mapDispatchToProps(dispatch) {
    return {
        loginUser: (credentials) => {loginUser(dispatch, credentials)}
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);