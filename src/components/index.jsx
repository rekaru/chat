import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { addMsg } from '../actions/index.js';
import App from './app.jsx';
import mainReducer from '../reducers/index.js';

const socket = io();

const initialState = {messages: [
], user: 'guest'};

const store = createStore(mainReducer, initialState);

socket.on('chat message', (msg) => {
  store.dispatch(addMsg(msg.text, msg.user));
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
