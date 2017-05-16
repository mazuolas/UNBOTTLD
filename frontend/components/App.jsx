import React from 'react';
import Index from './index';
import SessionFormContainer from './sessions/session_form_container';
import { Switch, Route } from 'react-router-dom';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={ Index } />
      <Route path='/login' component={ SessionFormContainer } />
      <Route path='/signup' component={ SessionFormContainer } />
    </Switch>
  </div>
);

export default App;
