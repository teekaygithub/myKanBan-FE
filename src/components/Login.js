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
        this.props.loginUser(credentials, this.props.history);
    }

    render () {
        return (
            <div className="container my-5">
                <div style={{textAlign:"center"}} className="jumbotron">
                    <h1>Thank you for trying out myKanBan!</h1>
                    <p>Authentication is still under development, so please use the following credential below:</p>
                    <p>User e-mail address: <strong>test@gmail.com</strong></p>
                    <p>Password: <strong>1234</strong></p>
                </div>
                <h3>Log In</h3>
                <form>
                    <div className="form-group">
                        <label>Email</label>
                        <input 
                            type="email"
                            name="username"
                            className="form-control"
                            onChange={this.handleChange}
                            value={this.state.email} />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input 
                            type="password"
                            name="password"
                            className="form-control"
                            onChange={this.handleChange}
                            value={this.state.password} />
                    </div>
                    <button 
                        type="submit" 
                        className="btn btn-primary"
                        onClick={this.handleSubmit}>Login</button>
                </form>
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
        loginUser: (credentials, history) => {loginUser(dispatch, credentials, history)}
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);