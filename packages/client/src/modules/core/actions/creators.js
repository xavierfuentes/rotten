import * as actionTypes from './types';

export const subscribeToLoop = callback => ({
  type: actionTypes.SUBSCRIBE_TO_LOOP,
  payload: { callback },
});

export const unsubscribeFromLoop = () => ({
  type: actionTypes.UNSUBSCRIBE_FROM_LOOP
});
