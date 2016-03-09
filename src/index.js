import React from 'react';
import ReactDOM from 'react-dom';
import { App, NavTo } from './containers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import './style.css';

let store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
