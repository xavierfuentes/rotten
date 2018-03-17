import React from 'react';
import { render } from 'react-dom';

import configureStore from './configureStore'
import Root from './modules/core/components/Root'
import registerServiceWorker from './registerServiceWorker';

const store = configureStore()

render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
