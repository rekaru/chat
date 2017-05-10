import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import msg from '../reducers/index';
import App from './app.jsx';

const initialState = [
    {
        user: 'Max',
        text: 'Hello'
    },
    {
        user: 'Alex1',
        text: 'Fine'
    }
];

const store = createStore(msg, initialState);
store.subscribe(() => {
    console.log(store.getState());
});
store.dispatch({type: 'ADD_MSG', text: 'test', user: 'Spirit'});
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);