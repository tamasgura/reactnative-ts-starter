import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { counterReducer } from '../reducers'
import { logger } from './logger'
import { initSagas } from './initSagas'
import { JSONPlaceholderReducer } from '../reducers'

const rootReducer = combineReducers({
  counter: counterReducer,
  JSONPlaceholder: JSONPlaceholderReducer,
})

const sagaMiddleware = createSagaMiddleware()
const middlewares: any = [sagaMiddleware]
if (__DEV__) {
  middlewares.push(logger)
}
const middlewareEnhancer = applyMiddleware(...middlewares)

const enhancers = [middlewareEnhancer]
const composeEnhancers: any = compose(...enhancers)

const store = createStore(rootReducer, {}, composeEnhancers)

initSagas(sagaMiddleware)

export default store
