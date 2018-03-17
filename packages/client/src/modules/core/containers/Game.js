import { connect } from 'react-redux';

import Game from '../components/Game'
import { allLoopersAsArray } from '../selectors/loopers'

const mapStateToProps = (state, ownProps) => ({
  loopers: allLoopersAsArray(state)
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
