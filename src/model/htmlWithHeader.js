import React, { Component } from 'react';
import css from '../assets/css/header.module.css';
import search from '../assets/img/搜索.png';
import add from '../assets/img/添加.png';
import logo from '../assets/img/logo.png';

export default class HtmlWithHeader extends Component {
  render() {
    if (this.props.title === '个人') {
      return null;
    } else {
      return (
        <header className={css.AppHeader}>
          <img src={logo} className={css.AppLogo} alt="logo" />
          <p>{this.props.title}</p>
          <div>
            <img src={search} className={css.AppImg} alt="" />
            <img src={add} className={css.AppImg} alt="" />
          </div>
        </header>
      );
    }
  }
}