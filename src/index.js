import './styles/global.scss';
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { ConnectedRouter } from 'react-router-redux';
import { history } from './store/configureStore';
import Root from './containers/Root';
import configureStore from './store/configureStore';

export const store = configureStore();

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
        <Root store={store} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
