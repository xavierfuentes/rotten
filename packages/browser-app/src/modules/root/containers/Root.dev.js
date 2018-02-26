import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'

import DevTools from './DevTools'
import Game from './Game'

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <Game />
      <DevTools />
    </div>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root