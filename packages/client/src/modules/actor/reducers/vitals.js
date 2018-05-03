import { actionTypes as vitalsActionTypes } from '../actions/vitals';

export const DEFAULT_STATE = {
  energy: 0,
  hydration: 0,
  stamina: 0
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    /* eslint-disable no-fallthrough */
    case vitalsActionTypes.UPDATE_ENERGY:
    case vitalsActionTypes.UPDATE_HYDRATION:
    /* eslint-enable no-fallthrough */
    case vitalsActionTypes.UPDATE_STAMINA:
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
