import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthenticatedRoute from '../components/authenticated-route';
import UnauthenticatedRoute from '../components/unauthenticated-route';
import Loadable from 'react-loadable';

import NotFound from './not-found';

const Homepage = Loadable({
  loader: () => import(/* webpackChunkName: "homepage" */ './homepage'),
  loading: () => null,
  modules: ['homepage']
});

const Help = Loadable({
  loader: () => import(/* webpackChunkName: "help" */ './help'),
  loading: () => null,
  modules: ['help']
});

// const About = Loadable({
//   loader: () => import(/* webpackChunkName: "about" */ './about'),
//   loading: () => null,
//   modules: ['about']
// });

// const Dashboard = Loadable({
//   loader: () => import(/* webpackChunkName: "dashboard" */ './dashboard'),
//   loading: () => null,
//   modules: ['dashboard']
// });

// const Login = Loadable({
//   loader: () => import(/* webpackChunkName: "login" */ './login'),
//   loading: () => null,
//   modules: ['login']
// });

// const Logout = Loadable({
//   loader: () => import(/* webpackChunkName: "logout" */ './logout'),
//   loading: () => null,
//   modules: ['logout']
// });

// const Profile = Loadable({
//   loader: () => import(/* webpackChunkName: "profile" */ './profile'),
//   loading: () => null,
//   modules: ['profile']
// });

export default () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route exact path="/help" component={Help} />
    <Route component={NotFound} />
  </Switch>
);
