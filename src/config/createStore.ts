import {createStore, compose, applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk'

import reducers from 'lib/redux/reducers'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)))