import * as actionTypes from '../actions/types';

/*
TODO: In order to have time travelling and a serializable state,
remove the loop callbacks from the state.
Maybe a HOC for looped components?
*/

export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.SUBSCRIBE_TO_LOOP:
      return state.concat(action.payload.callback);
    default:
      return state;
  }
};
