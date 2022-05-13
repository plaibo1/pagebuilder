import { applyMiddleware, combineReducers, createStore } from "redux";
import middleware from 'redux-thunk';
import elementsList from './elements-reducer'

let reducers = combineReducers({
    elementsList: elementsList,
});

const store = createStore(reducers, applyMiddleware(middleware))


window.store = store

export default store;