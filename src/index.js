import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

import './assets/css/index.css';
import logo from './assets/img/logo.png';
import home from './assets/img/home.png';
import about from './assets/img/about.png';

import RoutePage from './route';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="App-name">Simulation Chat Room</p>
        </header>
        <Router>
          <div className="App-body">
            <RoutePage />
          </div>
          <footer>
            <NavLink to="/">
              <img src={home} className='navImg' alt="" />
            </NavLink>
            <NavLink to="/about">
              <img src={about} className='navImg' alt="" />
            </NavLink>
          </footer>
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
