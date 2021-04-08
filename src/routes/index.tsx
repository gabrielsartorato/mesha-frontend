import React from 'react';
import { Switch } from 'react-router-dom';

import SigniIn from '../pages/SignIn';
import Signup from '../pages/Signup';

import Dashboard from '../pages/Dashboard';

import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SigniIn} />
    <Route path="/signup" component={Signup} />

    <Route path="/dashboard" isPrivate component={Dashboard} />
  </Switch>
);

export default Routes;
