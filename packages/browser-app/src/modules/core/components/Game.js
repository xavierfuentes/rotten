import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Hero from '../../hero/containers/Hero';

export default class Game extends Component {
  static propTypes = {};

  loopID = null;

  loop = () => {
    const { loopers } = this.props;

    loopers.forEach(callback => {
      callback.call();
    });

    this.loopID = window.requestAnimationFrame(this.loop);
  }

  componentDidMount() {
    if (!this.loopID) {
      this.loop();
    }
  }

  componentWillUnmount() {
    if (!this.loopID) {
      window.cancelAnimationFrame(this.id);
      this.loopID = null;
    }
  }

  render() {
    return (
      <Hero />
    );
  }
}
