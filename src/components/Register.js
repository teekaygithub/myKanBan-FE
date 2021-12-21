import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { registerUser } from '../actions/authActions';
import '../registerpage.css';
import {Link} from 'react-router-dom';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            fullname: "",
            password: ""
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
        const newUser = {
            "username": this.state.username,
            "fullname": this.state.fullname,
            "password": this.state.password
        }
        this.props.registerUser(newUser, this.props.history);
    }

    render () {
        return (
            <div id="register-container">
                <div id="register-banner">
                    <h1>Thank you for trying out myKanBan!</h1>
                    <p>You are also welcome to use an existing guest account:</p>
                    <p>Email: test@test.com</p>
                    <p>Password: 1234</p>
                    <div>
                        <Link to="/login">Login Page</Link>
                    </div>
                </div>
                <div id="register-form">
                    <h3>Create your new account</h3>
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            type="email"
                            name="username"
                            placeholder='Email address'
                            onChange={this.handleChange}
                            value={this.state.email} />
                        <input
                            type="text"
                            name="fullname"
                            placeholder='Your name'
                            onChange={this.handleChange}
                            value={this.state.fullname} />
                        <input 
                            type="password"
                            name="password"
                            placeholder='Password'
                            onChange={this.handleChange}
                            value={this.state.password} />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        registerUser: (newUser, history) => {registerUser(dispatch, newUser, history);}
    };
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(Register);