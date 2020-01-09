import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import tabbarArr from './tabbarArr';
import css from '../assets/css/tabbar.module.css';

export default class Tabbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    }
  }

  componentDidMount() {
    const p = window.location.pathname;
    tabbarArr.map((item, key) => {
      if (item.path === p) {
        this.setState({
          index: key
        })
      }
      return null;
    });
  }

  itemChange(key, name) {
    this.props.title(name);
    this.setState({
      index: key
    })
  }

  render() {
    const tab = tabbarArr.map((item, key) => {
      return (
        <Link
          to={item.path}
          key={key}
          onClick={() => this.itemChange(key, item.name)}
        >
          <figure>
            <img
              src={this.state.index === key ? item.imgAct : item.img}
              className={css.navImg}
              alt=""
            />
            <figcaption style={{ color: (this.state.index === key ? '#66ccff' : '#000') }}>
              {item.name}
            </figcaption>
          </figure>
        </Link>
      );
    });

    return (
      <footer className={css.tabbar}>
        {tab}
      </footer>
    );
  }
}