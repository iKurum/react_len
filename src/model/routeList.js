import Home from '../compenent/Home';
import Commun from '../compenent/Commun';
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
    path: '/about',
    component: About,
  }
];

export default routeCon;