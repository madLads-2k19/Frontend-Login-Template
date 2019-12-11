import React, { Component } from 'react';

// import logo from './logo.svg';
import './App.css';
// import { Button } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './components/about'
import Contact from './components/contact'
import Login from './components/login'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Switch>
              {/* <Route path="/" exact component={App} /> */}
              <Route path="/" exact component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/login" exact component={Login} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;