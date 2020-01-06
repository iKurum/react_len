import React from 'react';
import { Route } from 'react-router-dom';

// 注册路由
export default function RouteWithSubRouters(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => <route.component {...props} routes={route.routes} />}
    />
  );
}