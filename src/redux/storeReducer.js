import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import rootReducer from './rootReducer'

const middleWare = [logger]
export const store = createStore(rootReducer, applyMiddleware(...middleWare))