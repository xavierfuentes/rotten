import { actionTypes } from '../actions/game';

export const DEFAULT_STATE = {
  id: null,
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case actionTypes.START_GAME:
      return { ...state, id: action.payload.id };
    default:
      return state;
  }
};
