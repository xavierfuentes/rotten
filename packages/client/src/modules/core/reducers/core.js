import { combineReducers } from 'redux';

import game from './game';
import loop from '../../../store/enhancers/loop/reducers';

export default combineReducers({
  game,
  loop
});
