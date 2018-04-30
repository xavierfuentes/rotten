import { actionTypes } from '../actions/vitals';
import ACTOR_CONSTANTS from '../constants';

export const DEFAULT_STATE = {
  energy: ACTOR_CONSTANTS.MALE_INITIAL_CALORIES,
  hydration: ACTOR_CONSTANTS.MALE_INITIAL_HYDRATION,
  stamina: 5
};

export default (
  state = DEFAULT_STATE,
  action = { type: '', payload: null }
) => {
  switch (action.type) {
    /* eslint-disable no-fallthrough */
    case actionTypes.UPDATE_ENERGY:
    case actionTypes.UPDATE_HYDRATION:
    /* eslint-enable no-fallthrough */
    case actionTypes.UPDATE_STAMINA:
      const key = action.type
        .split('UPDATE_')
        .pop()
        .toLowerCase();
      const nextKey = state[key] + action.payload[key];
      return { ...state, [key]: nextKey };
    default:
      return state;
  }
};
