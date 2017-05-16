import configureStore from './store/store';
import Root from './components/root';
import ReactDOM from 'react-dom';
import React from 'react';

document.addEventListener('DOMContentLoaded', () => {
  let preloadedState = {}
  if (window.currentUser) {
    preloadedState = { session: { currentUser: window.currentUser } };
    delete window.currentUser;
  }
  const root = document.getElementById('root');
  const store = configureStore(preloadedState);
  window.store = store;
  ReactDOM.render(<Root store={ store }/>, root);
});
