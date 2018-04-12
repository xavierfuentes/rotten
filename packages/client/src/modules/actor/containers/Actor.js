import { connect } from 'react-redux';

import { subscribe } from '../../../store/enhancers/loop/actions';
import { actorLoop } from '../actions/loop';
import Actor from '../components/Actor';

const mapStateToProps = state => ({
  vitals: state.actor.vitals
});
const mapDispatchToProps = {
  subscribe,
  actorLoop
};

export default connect(mapStateToProps, mapDispatchToProps)(Actor);
