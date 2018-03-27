import { actionTypes } from '../actions';

export const DEFAULT_STATE = {
  fps: 0,
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case actionTypes.TICK_LOOP:
      return { ...state, fps: action.payload.fps };
    default:
      return state;
  }
};
