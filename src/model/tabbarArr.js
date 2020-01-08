import home from '../assets/img/微信.png';
import homeAct from '../assets/img/微信_选中.png';
import about from '../assets/img/个人.png';
import aboutAct from '../assets/img/个人_选中.png';
import commun from '../assets/img/通讯录.png';
import communAct from '../assets/img/通讯录_选中.png';
// import find from '../assets/img/发现.png';
// import findAct from '../assets/img/发现_选中.png';

const tabbarArr = [
  {
    img: home,
    imgAct: homeAct,
    name: '聊天',
    path: '/'
  },
  {
    img: commun,
    imgAct: communAct,
    name: '通讯录',
    path: '/commun'
  },
  // {
  //   img: find,
  //   imgAct: findAct,
  //   name: '发现',
  //   path: '/find'
  // },
  {
    img: about,
    imgAct: aboutAct,
    name: '个人',
    path: '/about'
  }
];

export default tabbarArr;