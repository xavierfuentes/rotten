import { combineReducers } from 'redux';

import vitals from './vitals';
import character from './character';

export default combineReducers({
  vitals,
  character
});
