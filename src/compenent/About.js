import React, { Component } from 'react';
import css from '../assets/css/about.module.css';

class About extends Component {
  render() {
    return (
      <div>
        <div className={css.conBox}>
          <div>相机</div>
          <div className={css.userInfo}>
            <div>头像</div>
            <div>呢称</div>
          </div>
        </div>
        <div className={css.conBox}>
          <ul><li>支付</li></ul>
        </div>
      </div>
    );
  }
}

export default About;