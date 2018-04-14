import { actionTypes } from '../actions';

export const DEFAULT_STATE = {
  fps: 0,
  timestamp: null
};

export default function(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case actionTypes.TICK_LOOP:
      return {
        ...state,
        fps: action.payload.fps,
        timestamp: action.payload.timestamp
      };
    default:
      return state;
  }
}
