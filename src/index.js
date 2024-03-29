import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import todoApp from './reducers'

const store = createStore(todoApp)

ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>, 
    document.getElementById('root')
);


serviceWorker.unregister();
