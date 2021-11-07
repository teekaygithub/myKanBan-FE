import './App.css';
import React, {Component} from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import Header from "./components/Header";
import ProjectContainer from "./components/ProjectContainer";
import KanBanContainer from "./components/KanBanContainer";
import AddProject from "./components/AddProject";
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import Login from './components/Login';
import { Provider } from 'react-redux';
import store from './store';
import Register from './components/Register';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      loggedIn: sessionStorage.getItem('loggedin')
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    let loggedIn = sessionStorage.getItem('loggedin');
    if (loggedIn) {
      this.setState({loggedIn: true});
    }
  }

  handleLogin(email, pw) {
    if (email === 'test@gmail.com') {
      this.setState({
        loggedIn: true
      });
      sessionStorage.setItem('loggedin', true);
      console.log(`state.loggedIn: ${this.state.loggedIn}`);
    } else {
      console.log(`INVALID EMAIL: ${email}`);
    }
  }
  
  handleLogout() {
    this.setState({
      loggedIn:false
    });
    sessionStorage.removeItem('loggedin');
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <Switch>

            <Route exact path="/" component={Welcome} />

            <Route exact path="/register" component={Register} />
            
            <Route exact path="/login" component={Login} />

            <Route exact path="/dashboard" component={ProjectContainer} />
            
            <Route 
              path = "/project/:id"
              render = {props => this.state.loggedIn ? 
                                      <KanBanContainer {...props} /> : 
                                      <Redirect to="/login" /> }>
            </Route>

            <Route 
              path="/addproject"
              render = {props => this.state.loggedIn ? 
                                      <AddProject {...props} /> : 
                                      <Redirect to="/login" />
              } >
            </Route>
            
            <Route path="/about">
              <About />
            </Route>

          </Switch>
          <Footer />
        </div>
      </Provider>
    );
  }
}

function About () {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
};

export default App;
