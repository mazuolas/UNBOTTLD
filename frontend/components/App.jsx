import React from 'react';
import Index from './index';
import SessionFormContainer from './sessions/session_form_container';
import NavBarContainer from './nav/nav_bar_container';
import DrinkIndexContainer from './drinks/drink_index_container';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {
return (

  <div>
      <ProtectedRoute path='/' component={ NavBarContainer } />
    <Switch>
      <AuthRoute exact path="/" component={ Index } />
      <AuthRoute path='/login' component={ SessionFormContainer } />
      <AuthRoute path='/signup' component={ SessionFormContainer } />
      <ProtectedRoute path='/bottles' component={ DrinkIndexContainer } />
      <ProtectedRoute path='/home' component={ ()=><h1 style={{margin: '100px'}}>Home page not made yet :(</h1> } />
    </Switch>
  </div>
  );
}

export default App;
