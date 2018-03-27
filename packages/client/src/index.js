import React from 'react';
import { render } from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';

import './index.css';

import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';

import Root from './modules/core/containers/Root';

const store = configureStore();

render(
  <ReduxProvider store={store}>
    <Root />
  </ReduxProvider>,
  document.getElementById('root'),
);

registerServiceWorker();
