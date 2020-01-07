import React, { Component } from 'react';

import search from '../assets/img/搜索.png';
import add from '../assets/img/添加.png';
import logo from '../assets/img/logo.png';

export default class HtmlWithHeader extends Component {
  render() {
    if (this.props.title === '个人') {
      return null;
    } else {
      return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.props.title}</p>
          <div>
            <img src={search} className="App-img" alt="" />
            <img src={add} className="App-img" alt="" />
          </div>
        </header>
      );
    }
  }
}