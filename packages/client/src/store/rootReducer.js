import { combineReducers } from 'redux';

import actor from '../modules/actor/reducers';
import core from '../modules/core/reducers';
import loop from './enhancers/loop/reducers';

export default combineReducers({
  actor,
  core,
  loop
});
