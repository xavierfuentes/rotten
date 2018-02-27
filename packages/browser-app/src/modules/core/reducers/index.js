import { combineReducers } from 'redux';

import core from './core';
import hero from '../../hero/reducers';

export default combineReducers({
  core,
  hero,
});
