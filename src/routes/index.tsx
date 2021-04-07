import React from 'react';
import { Switch } from 'react-router-dom';

import SigniIn from '../pages/SignIn';

import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SigniIn} />
  </Switch>
);

export default Routes;
