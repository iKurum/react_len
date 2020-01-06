import Home from '../compenent/Home';
import About from '../compenent/About';

const routeCon = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/about',
    component: About,
  }
];

export default routeCon;