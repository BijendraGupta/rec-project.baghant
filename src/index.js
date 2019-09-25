import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import userMaintance from './redux/reducer/userMaintance'
import {reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

const reducers={
    user:userMaintance,
    form:formReducer
}

const store = createStore(combineReducers(reducers),{}, applyMiddleware(createLogger(),thunk));
let app = <Provider store={store}> <App /></Provider>;

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
