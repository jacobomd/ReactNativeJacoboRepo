import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import * as reducers from '../redux'; // IMPORTAMOS TODOS LOS REDUCERS

const reducer = combineReducers(reducers); // LOS JUNTAMOS EN UN ÚNICO REDUCER
const store = createStore(reducer, applyMiddleware(thunk)); // CREAMOS LA STORE Y LE APLICAMOS LOS MIDDLEWARE

export default store;
