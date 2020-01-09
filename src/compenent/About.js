import React, { Component } from 'react';
import payIcon from '../assets/img/支付.png';
import collectIcon from '../assets/img/收藏.png';
import photoIcon from '../assets/img/相册.png';
import cardIcon from '../assets/img/卡包.png';
import emojiIcon from '../assets/img/表情.png';
import setIcon from '../assets/img/设置.png';
import css from '../assets/css/about.module.css';

class About extends Component {
  render() {
    let s = process.env.NODE_ENV === 'development'
      ?
      ('/api/80/66ccff')
      :
      ('https://via.placeholder.com/80/66ccff');
    
    return (
      <div>
        <div className={css.conBox}>
          <figure>
            <img src={require('../assets/img/相机.png')} className={css.camera} alt='' />
          </figure>
          <div className={css.userInfo}>
            <div>
              <img src={s} alt='' />
            </div>
            <div>
              <p>Emiliatan</p>
              <p>邮箱：cyan@emiliatan.online</p>
            </div>
          </div>
        </div>
        <div className={css.conBox}>
          <p>
            <img src={payIcon} alt='' />
            <span>支付</span>
            <span>></span>
          </p>
        </div>
        <div className={css.conBox}>
          <p>
            <img src={collectIcon} alt='' />
            <span>收藏</span>
            <span>></span>
          </p>
          <p>
            <img src={photoIcon} alt='' />
            <span>相册</span>
            <span>></span>
          </p>
          <p>
            <img src={cardIcon} alt='' />
            <span>卡包</span>
            <span>></span>
          </p>
          <p>
            <img src={emojiIcon} alt='' />
            <span>表情</span>
            <span>></span>
          </p>
        </div>
        <div className={css.conBox}>
          <p>
            <img src={setIcon} alt='' />
            <span>设置</span>
            <span>></span>
          </p>
        </div>
      </div>
    );
  }
}

export default About;