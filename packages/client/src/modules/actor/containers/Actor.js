import { connect } from 'react-redux';

import Actor from '../components/Actor';

const mapStateToProps = state => ({
  vitals: state.actor.vitals
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Actor);
