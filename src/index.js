import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './assets/css/index.css';
import logo from './assets/img/logo.png';

import routeCon from './model/routeList';
import RouteWithSubRouters from './model/routeWithSubRouters';
import Tabbar from './tabbar/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="App-name">Simulation Chat Room</p>
        </header>
        <Router>
          <div className="App-body">
            {
              routeCon.map((item, key) => <RouteWithSubRouters key={key} {...item} />)
            }
          </div>
          <Tabbar />
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
