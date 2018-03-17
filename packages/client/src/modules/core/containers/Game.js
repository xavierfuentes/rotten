import { connect } from 'react-redux';

import Game from '../components/Game'
import { allLoopersSelector } from '../selectors/loopers'

const mapStateToProps = (state, ownProps) => ({
  loopers: allLoopersSelector(state)
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
