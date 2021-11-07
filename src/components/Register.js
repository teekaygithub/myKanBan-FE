import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { registerUser } from '../actions/authActions';

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
            <div className="container my-5 w-50">
                <div style={{textAlign:"center"}} className="jumbotron">
                    <h1>Thank you for trying out myKanBan!</h1>
                </div>
                <h3>Register new user</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Email</label>
                        <input 
                            type="email"
                            name="username"
                            className="form-control"
                            style={{border: "1px solid #000"}}
                            onChange={this.handleChange}
                            value={this.state.email} />
                    </div>
                    <div className = "form-group">
                        <label>Full name</label>
                        <input
                            type="text"
                            name="fullname"
                            className="form-control"
                            style={{border: "1px solid #000"}}
                            onChange={this.handleChange}
                            value={this.state.fullname} />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input 
                            type="password"
                            name="password"
                            className="form-control"
                            style={{border: "1px solid #000"}}
                            onChange={this.handleChange}
                            value={this.state.password} />
                    </div>
                    <button 
                        type="submit" 
                        className="btn btn-primary">Submit</button>
                </form>
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