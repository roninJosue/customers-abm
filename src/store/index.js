import {compose, createStore} from "redux"
import reducers from "../reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_COMPOSE|| compose()

export const store = createStore(reducers, {}, composeEnhancers())