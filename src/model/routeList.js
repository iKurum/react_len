import Home from '../compenent/Home';
import Commun from '../compenent/Commun';
import Find from '../compenent/Find';
import About from '../compenent/About';

const routeCon = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/commun',
    component: Commun,
  },
  {
    path: '/find',
    component: Find,
  },
  {
    path: '/about',
    component: About,
  }
];

export default routeCon;