import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Loop from '../../loop/containers/Loop'

export default class Game extends Component {
  static propTypes = {
    children: PropTypes.any,
  };

  render() {
    const { children } = this.props;
    return <Loop>{children}</Loop>
  }
}
