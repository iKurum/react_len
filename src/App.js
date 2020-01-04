import React from 'react';
import logo from './logo.png';
import './css/App.css';

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="App-name">Simulation Chat Room</p>
        </header>
        <div className="App-body">body</div>
        <footer>footer</footer>
      </div>
    );
  }
}

export { App };