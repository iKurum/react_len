import React, { Component } from 'react';
import videoIcon from '../assets/img/视频.png';
import messageIcon from '../assets/img/发消息.png';
import css from '../assets/css/friendInfo.module.css';

class FriendInfo extends Component {
  render() {
    if (this.props.isInfo) {
      return (
        <div className={css.infoBox}>
          <div className={css.btn}>
            <span onClick={this.props.callback}>{'<'}</span>
            <span>...</span>
          </div>
          <div className={css.userInfo}>
            <div>
              <img src={this.props.info.img} alt='' />
            </div>
            <div>
              <p>{this.props.info.name}</p>
              <p>邮箱：{this.props.info.email}</p>
              <p>{this.props.info.sentence}</p>
            </div>
          </div>
          <div className={css.conBox}>
            <p>
              <span>设置备注和标签</span>
              <span>></span>
            </p>
            <p>
              <span>朋友权限</span>
              <span>></span>
            </p>
          </div>
          <div className={css.conBox}>
            <p>
              <span>朋友圈</span>
              <span>></span>
            </p>
            <p>
              <span>更多信息</span>
              <span>></span>
            </p>
          </div>
          <div className={css.conBox}>
            <div>
              <p>
                <img src={messageIcon} alt='' />
                发消息
              </p>
              <p>
                <img src={videoIcon} alt='' />
                音视频通话
              </p>
            </div>
          </div>
        </div >
      );
    } else {
      return null;
    }
  }
}

export default FriendInfo;