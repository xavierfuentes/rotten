import { connect } from 'react-redux';

import * as gameActions from '../actions/game';
import Root from '../components/Root';

const mapStateToProps = (state, ownProps) => ({
  hasGameStarted: !!state.core.game.id,
  fps: state.core.loop.fps
});
const mapDispatchToProps = {
  createGame: gameActions.createGame
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);
