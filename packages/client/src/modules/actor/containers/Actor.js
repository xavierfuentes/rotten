import { connect } from 'react-redux';

import {
  subscribe
  // unsubscribe
} from '../../../store/enhancers/loop/actions';
import { actorLoop } from '../actions/loop';
import Actor from '../components/Actor';

const mapStateToProps = state => ({
  vitals: state.actor.vitals
});
const mapDispatchToProps = {
  subscribe,
  // unsubscribe,
  actorLoop
};

export default connect(mapStateToProps, mapDispatchToProps)(Actor);
