import { combineReducers } from 'redux'

import loop from '../../loop/reducers'
import hero from '../../hero/reducers'

export default combineReducers({
  loop,
  hero,
})
