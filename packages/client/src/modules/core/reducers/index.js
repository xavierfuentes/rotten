import { combineReducers } from 'redux';

import core from './core';
import actor from '../../actor/reducers';

export default combineReducers({
  core,
  actor
});
