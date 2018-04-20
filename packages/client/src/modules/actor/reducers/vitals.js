import { actionTypes } from '../actions/vitals';

export const DEFAULT_STATE = {
  energy: 5,
  hydration: 5,
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
