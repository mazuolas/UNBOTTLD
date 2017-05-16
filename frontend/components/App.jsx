import React from 'react';
import Index from './index';
import { Switch, Route } from 'react-router-dom';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={ Index } />
      
    </Switch>
  </div>
);

export default App;
