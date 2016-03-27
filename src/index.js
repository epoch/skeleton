import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { App } from './containers';
import { Home, About, Users } from './components';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import './style.css';

let store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/users" component={Users}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
