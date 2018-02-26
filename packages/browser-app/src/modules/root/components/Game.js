import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Game extends Component {
  static propTypes = {
    children: PropTypes.any,
  };

  render() {
    const { children } = this.props;
    return <div>{children}</div>
  }
}
