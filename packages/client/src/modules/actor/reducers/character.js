import { actionTypes as characterActions } from '../actions/character';

export const DEFAULT_STATE = {
  gender: null
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case characterActions.SPAWN:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
