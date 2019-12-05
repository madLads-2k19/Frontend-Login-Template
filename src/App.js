import React, { Component } from 'react';

// import logo from './logo.svg';
import './App.css';
// import { Button } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './components/about'
import Contact from './components/contact'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Main</h1>
        <Router>
          <div>
            <Switch>
              {/* <Route path="/" exact component={App} /> */}
              <Route path="/" exact component={About} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;