import React from 'react';
import Index from './index';
import SessionFormContainer from './sessions/session_form_container';
import NavBarContainer from './nav/nav_bar_container';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/" component={ Index } />
      <AuthRoute path='/login' component={ SessionFormContainer } />
      <AuthRoute path='/signup' component={ SessionFormContainer } />

      <ProtectedRoute path='/home' component={ NavBarContainer } />
    </Switch>
  </div>
);

export default App;
