import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import routeCon from './model/routeList';
import RouteWithSubRouters from './model/routeWithSubRouters';
import Tabbar from './model/tabbar';
import HtmlWithHeader from './model/htmlWithHeader';
import './assets/css/index.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Chat'
    }
  }

  getTitle = val => {
    this.setState({
      title: val
    })
  }

  render() {
    return (
      <div className="App">
        <HtmlWithHeader title={this.state.title} />
        <Router>
          <div className="App-body">
            {
              routeCon.map((item, key) => <RouteWithSubRouters key={key} {...item} />)
            }
          </div>
          <Tabbar title={this.getTitle} />
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
