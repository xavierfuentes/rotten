import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MainMenu extends Component {
  static propTypes = {
    createGame: PropTypes.func.isRequired
  };

  createGameClicked = () => {
    const { createGame } = this.props;
    createGame && createGame();
  };

  render() {
    return (
      <section>
        <button onClick={this.createGameClicked}>New Game</button>
      </section>
    );
  }
}
