import React from 'react';
import { Route } from 'react-router-dom';

import Home from './compenent/Home';
import About from './compenent/About';

function RoutePage() {
  return (
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
    </div>
  );
}

export default RoutePage;