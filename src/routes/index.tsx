import React from 'react';
import { Switch } from 'react-router-dom';

import SigniIn from '../pages/SignIn';
import Signup from '../pages/Signup';

import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SigniIn} />
    <Route path="/signup" exact component={Signup} />
  </Switch>
);

export default Routes;
