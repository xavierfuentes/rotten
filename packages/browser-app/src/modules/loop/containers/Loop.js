import { connect } from 'react-redux';

import Loop from '../components/Loop'
import { getAllSubscribers } from '../selectors/subscribers'

const mapStateToProps = (state, ownProps) => ({
  subscribers: getAllSubscribers(state)
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Loop);
