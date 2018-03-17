import { connect } from 'react-redux';

import { subscribeToLoop } from '../../core/actions/creators';
import Actor from '../components/Actor';

const mapStateToProps = (state, ownProps) => ({
  vitals: state.actor.vitals
});
const mapDispatchToProps = {
  subscribeToLoop,
};

export default connect(mapStateToProps, mapDispatchToProps)(Actor);
