import React, { Component } from 'react';
import axios from 'axios';

import '../assets/css/commun.css';

export default class Commun extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      error: null,
      isSuccess: false
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/mock.json')
      .then(res => {
        this.setState({
          data: res.data.data,
          isSuccess: true
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({
          error: err
        });
      });
  }
  render() {
    let s = 'https://via.placeholder.com/40/' + color16();

    if (this.state.isSuccess) {
      let d = this.state.data;
      let list = d.map((item, key) => {
        s = 'https://via.placeholder.com/40/' + color16();

        return (
          <li key={key}>
            <div>
              <img src={s} alt='' />
            </div>
            <div>
              <p>{item.name}</p>
              <p>{item.email}</p>
            </div>
          </li>
        );
      })

      return (
        <ul>
          {list}
          <li className='lastLi'><p>...... 我是底线 ......</p></li>
        </ul>
      );
    } else {
      return (
        <ul>
          <li>
            <div>
              <img src={s} alt='' />
            </div >
            <div>
              <p>加载中 ...</p>
            </div>
          </li >
        </ul >
      );
    }
  }
}

function color16() {
  const color = [];
  for (let i = 0; i < 3; i++) {
    let rgb = Math.floor(Math.random() * 265).toString(16);
    rgb = rgb.length === 1 ? ('0' + rgb) : rgb;
    color.push(rgb);
  }
  return color.join('').toUpperCase();
}