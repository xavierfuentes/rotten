import { actionTypes } from '../actions/vitals';

export const DEFAULT_STATE = {
  energy: 10,
  hydration: 10,
  stamina: 10
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
      return nextKey >= 0 ? { ...state, [key]: nextKey } : 0;
    default:
      return state;
  }
};
