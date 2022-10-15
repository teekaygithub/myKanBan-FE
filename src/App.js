import './App.css';
import React, { Component } from 'react';
import {
  Switch,
  Route
} from 'react-router-dom'

// Custom components
import Header from "./components/Header";
import ProjectContainer from "./components/ProjectContainer";
import KanBanContainer from "./components/KanBanContainer";
import { Welcome } from './components/Welcome';
import Footer from './components/Footer';
import { Login } from './components/Login';
import { Provider } from 'react-redux';
import Register from './components/Register';
import { About } from './components/About';

// React - Redux
import store from './store';
import { LOGIN, LOGOUT } from './actions/types';
import { setRequestHeader } from './actions/jwtUtility';
import { isTokenExpired } from './actions/jwtUtility';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const token = localStorage.getItem('jwt');
    if (token) {
      let isExpired = isTokenExpired(token);
      console.log(`Is token expired? ${isExpired}`);
      if (isExpired) {
        setRequestHeader(false);
        localStorage.removeItem('jwt');
        store.dispatch({
          type: LOGOUT
        });
      } else {
        setRequestHeader(token);
        store.dispatch({
          type: LOGIN,
          payload: localStorage.getItem('jwt')
        });
      }
    } else {
      setRequestHeader(false);
      store.dispatch({
        type: LOGOUT
      });
    }
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

            <Route exact path="/project/:id" component={KanBanContainer} />

            <Route exact path="/about">
              <About />
            </Route>

          </Switch>
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
