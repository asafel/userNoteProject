import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import reducers from '../reducers';

export const history = createHistory();

const configureStore = preloadedState => {
  const store = createStore(
    reducers,
    preloadedState,
    compose(
      applyMiddleware(
        thunk,
        routerMiddleware(history)
      ))
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
};

export default configureStore;
