import {applyMiddleware, compose, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {routerMiddleware} from 'connected-react-router'
import {createInjectorsEnhancer} from 'redux-injectors'
import createRootReducer from './configReducer'
import {history} from './history'
import rootSaga from './sagas'

export default function configureAppStore(initialState = {}) {
  let composeEnhancers = compose
  const reduxSagaMonitorOptions = {}
  if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
    /* eslint-disable no-underscore-dangle */
    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  }

  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions)
  const {run: runSaga} = sagaMiddleware

  // Create the store with two middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. routerMiddleware: Syncs the location/URL path to the state
  const middlewares = [sagaMiddleware, routerMiddleware(history)]

  const enhancers = [
    applyMiddleware(...middlewares),
    createInjectorsEnhancer({
      createReducer: createRootReducer,
      runSaga,
    }),
  ]

  const store = createStore(createRootReducer(), initialState, composeEnhancers(...enhancers))
  sagaMiddleware.run(rootSaga)
  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  //   if (module.hot) {
  //     module.hot.accept('./configReducer', () => {
  //       forceReducerReload(store)
  //     })
  //   }

  return store
}
