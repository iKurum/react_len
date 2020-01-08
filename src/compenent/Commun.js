import React, { Component } from 'react';
import axios from 'axios';

import '../assets/css/commun.css';

const listArr = ['↑', '♥', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '#'];

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
    axios.get('./mock.json')
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

  //分组
  getSortList(data) {
    let c = [];
    let d = {};
    data.forEach(el => {
      let u = el.email[0].toUpperCase();
      if (!d[u]) {
        c.push({
          sort: u,
          data: [el]
        });
        d[u] = el
      } else {
        c.forEach(ele => {
          if (ele.sort === u) {
            ele.data.push(el)
          }
        });
      }
    });
    return c.sort((a, b) => a.sort.localeCompare(b.sort));
  }

  render() {
    let listNav = listArr.map((v, k) => {
      if (/[A-Z]/.test(v)) {
        return <a href={`#${v}`} key={k}>{v}</a>;
      } else if (v === '↑'){
        return <a href='#A' key={k}>{v}</a>;
      } else if (v === '#') {
        return <a href='#Z' key={k}>{v}</a>;
      } else {
        return <p key={k}>{v}</p>;
      }
    });

    if (this.state.isSuccess) {
      let list = this.getSortList(this.state.data).map((item, key) => {
        let l = item.data.map((i, k) => {
          let s = '/api/40/' + color16();
          return (
            <li key={k}>
              <div>
                <img src={s} alt='' />
              </div>
              <div>
                <p>{i.name}</p>
                <p>{i.email}</p>
              </div>
            </li>
          )
        });

        return (
          <div id={item.sort} key={key} style={{ textAlign: 'left' }}>
            <p className='sortList'>{item.sort}</p>
            <ul>
              {l}
            </ul>
          </div>
        );
      })

      return (
        <div className='listBox'>
          <div className='listNav'>
            {listNav}
          </div>
          {list}
          <ul>
            <li className='lastLi'><p>{this.state.data.length} 位联系人</p></li>
          </ul>
        </div>
      );
    } else {
      return (
        <div className='listBox'>
          <p>加载中 ...</p>
        </div>
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
