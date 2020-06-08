import React from 'react';
import {Switch, Redirect} from 'react-router-dom';
import {PublicRoute} from './PublicRoute';
import {PrivateRoute} from './PrivateRoute';
import SignUp from '../containers/SignUp';
import Login from '../containers/Login';
import Navigation from '../containers/Navigation';
export const publicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp,
  },
];
export const privateRoutes = [
  {
    path: '/',
    name: 'Navigation',
    component: Navigation,
  },
];
export const Routes = (
  <Switch>
    {publicRoutes.map((route) => (
      <PublicRoute
        key={route.name}
        exact={true}
        path={route.path}
        component={route.component}
      />
    ))}
    {privateRoutes.map((route) => (
      <PrivateRoute key={route.name} path={route.path} component={route.component} />
    ))}
  </Switch>
);
