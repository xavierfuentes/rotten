import { actionTypes as loopActionTypes } from '../actions';

const subscribers = new Map();
const DEFAULT_CADENCE = 1; // 1 second

let lastAnimationFrameTime = 0;

export default store => next => action => {
  if (action.type === loopActionTypes.TICK_LOOP) {
    const { timestamp: curentAnimationFrameTime } = action.payload;
    subscribers.forEach((cadence, loop) => {
      if (
        !lastAnimationFrameTime ||
        curentAnimationFrameTime - lastAnimationFrameTime >= cadence * 1000
      ) {
        lastAnimationFrameTime = curentAnimationFrameTime;
        store.dispatch(loop);
      }
    });
  }

  if (action.type === loopActionTypes.SUBSCRIBE) {
    let cadence = action.payload.cadence || DEFAULT_CADENCE;
    subscribers.set(action.payload.loop, cadence);
  }

  // if (action.type === loopActionTypes.UNSUBSCRIBE) {
  //   subscribers.delete(action.payload.loop);
  // }

  return next(action);
};
