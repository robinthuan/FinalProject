import {createStore,} from 'redux';
import  AppReducer from '../Reducers/Index'
const store = createStore(
    AppReducer

);
export default store;