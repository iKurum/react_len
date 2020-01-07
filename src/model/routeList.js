import Chat from '../compenent/Chat';
import Commun from '../compenent/Commun';
// import Find from '../compenent/Find';
import About from '../compenent/About';

const routeCon = [
  {
    path: '/',
    component: Chat,
    exact: true
  },
  {
    path: '/home',
    component: Chat,
  },
  {
    path: '/commun',
    component: Commun,
  },
  // {
  //   path: '/find',
  //   component: Find,
  // },
  {
    path: '/about',
    component: About,
  }
];

export default routeCon;