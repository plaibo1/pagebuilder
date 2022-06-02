import { applyMiddleware, combineReducers, createStore } from "redux";
import middleware from 'redux-thunk';
import elementsList from './elements-reducer'
import user from './user-reducer'

let reducers = combineReducers({
    elementsList: elementsList,
    userData: user
});

const store = createStore(reducers, applyMiddleware(middleware))


window.store = store

export default store;