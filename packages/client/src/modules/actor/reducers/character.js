import { actionTypes as characterActions } from '../actions/character';
// import ACTOR_CONSTANTS from '../constants';

export const DEFAULT_STATE = {
  gender: null
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    /* eslint-disable no-fallthrough */
    case characterActions.SPAWN:
      return { ...state, gender: action.payload.gender };
    default:
      return state;
  }
};
