import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:"",
            password:""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const name = e.target.name;
        this.setState({
            [name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.loginHandler(this.state.email, this.state.password);
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
                            name="email"
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

export default Login;