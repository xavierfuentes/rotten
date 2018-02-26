import * as actionTypes from '../actions/types';

export const DEFAULT_STATE = {
  energy: 0,
  hunger: 0,
  thirst: 0,
  fatigue: 0,
};

export default (state = DEFAULT_STATE, action = { type: '', payload: null }) => {
  switch (action.type) {
    /* eslint-disable no-fallthrough */
    case actionTypes.UPDATE_ENERGY:
    case actionTypes.UPDATE_HUNGER:
    case actionTypes.UPDATE_THIRST:
    /* eslint-enable no-fallthrough */
    case actionTypes.UPDATE_FATIGUE:
      const key = action.type
        .split('UPDATE_')
        .pop()
        .toLowerCase();
      const nextKey = state[key] + action.payload[key];
      return nextKey >= 0 ? { ...state, [key]: nextKey } : 0;
    default:
      return state;
  }
};
