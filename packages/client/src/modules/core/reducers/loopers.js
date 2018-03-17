import * as actionTypes from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SUBSCRIBE_TO_LOOP:
      return { ...state, [action.payload.id]: action.payload.callback };
    default:
      return state;
  }
};
