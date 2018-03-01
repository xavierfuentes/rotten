import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
// import api from '../middleware/api'
import rootReducer from '../modules/core/reducers'
// import DevTools from '../modules/core/containers/DevTools'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(
      // applyMiddleware(thunk, api, createLogger()),
      applyMiddleware(thunk, createLogger()),
      // DevTools.instrument()
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../modules/core/reducers', () => {
      store.replaceReducer(rootReducer)
    })
  }

  return store
}

export default configureStore