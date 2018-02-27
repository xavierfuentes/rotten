import { connect } from 'react-redux';

import Game from '../components/Game'
import { getAllLoopers } from '../selectors/loopers'

const mapStateToProps = (state, ownProps) => ({
  loopers: getAllLoopers(state)
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
