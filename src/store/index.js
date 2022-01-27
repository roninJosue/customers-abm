import {compose, createStore, applyMiddleware} from "redux"
import promiseMiddleware from 'redux-promise'
import reducers from "../reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_COMPOSE|| compose()

export const store = createStore(reducers, {},
  composeEnhancers(applyMiddleware(promiseMiddleware)))