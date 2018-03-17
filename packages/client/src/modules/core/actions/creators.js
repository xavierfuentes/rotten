import * as actionTypes from './types';

export const subscribeToLoop = (id, callback) => ({
  type: actionTypes.SUBSCRIBE_TO_LOOP,
  payload: { id, callback },
});

export const unsubscribeFromLoop = () => ({
  type: actionTypes.UNSUBSCRIBE_FROM_LOOP
});
