// import * as actionCreators from '../actions/creators'
// import * as actionTypes from '../actions/types';

const DEFAULT_STATE = []

export default (state = DEFAULT_STATE, action = { type: '', payload: null }) => {
  switch (action.type) {
    // case actionTypes.START_LOOP_SUCCESS:
    //   return !state.id ? { ...state, id: action.payload.id } : state;
    // case actionTypes.STOP_LOOP_SUCCESS:
    //   return !state.id ? { ...state, id: null } : state;
    default:
      return state;
  }
};
