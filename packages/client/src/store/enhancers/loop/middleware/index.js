import { actionTypes as loopActionsTypes } from '../actions';

let lastAnimationFrameTime = 0;
let subscribers = [];

export default store => next => action => {
  if (action.type === loopActionsTypes.TICK_LOOP) {
    const { timestamp: curentAnimationFrameTime } = action.payload;
    subscribers.forEach(subscriber => {
      const { cadence = 1, loop } = subscriber;
      if (
        !lastAnimationFrameTime ||
        curentAnimationFrameTime - lastAnimationFrameTime >= cadence * 1000
      ) {
        lastAnimationFrameTime = curentAnimationFrameTime;
        store.dispatch(loop);
      }
    });
  }

  if (action.type === loopActionsTypes.SUBSCRIBE) {
    subscribers.push(action.payload);
  }

  return next(action);
};
