import thunkMiddleware from 'redux-thunk';
import promise from 'redux-promise';

import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
const loggerMiddleware = createLogger();

import  AppReducer from '../Reducers/Index'
const store = createStore(
    AppReducer,
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware,
            promise
        )


);
export default store;