import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { setToken } from '../API/api.utils'

import rootReducer from "./root-reducer";

const saveAuthToken = store => next => action => {
  if(action.type === 'LOGIN_SUCCESSFUL') {    
    setToken(action.payload)    
  }
    
  return next(action);
}

const middlewares = [logger, thunk, saveAuthToken]

const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store