import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import './Root.css'
import Game from '../containers/Game';

const Root = ({ store }) => (
  <Provider store={store}>
    <Game />
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
