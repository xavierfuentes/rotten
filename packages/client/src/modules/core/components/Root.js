import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MainMenu from '../components/MainMenu';
import Game from '../components/Game';

export default class Root extends Component {
  static propTypes = {
    hasGameStarted: PropTypes.bool,
    createGame: PropTypes.func.isRequired
  };

  render() {
    const { createGame, fps, hasGameStarted = false } = this.props;
    return (
      <section>
        <span>fps: {fps}</span>
        {hasGameStarted ? <Game /> : <MainMenu createGame={createGame} />}
      </section>
    );
  }
}
