import { startLoop, tickLoop } from './actions';

export function createGameLoop() {
  const { requestAnimationFrame, performance } = window;
  return createStore => (reducer, initialState, enhancer) => {
    const store = createStore(reducer, initialState, enhancer);
    const { dispatch, subscribe } = store;

    const times = [];
    let fps;

    subscribe(function() {
      requestAnimationFrame(() => {
        const now = performance.now();
        while (times.length > 0 && times[0] <= now - 1000) {
          times.shift();
        }
        times.push(now);
        fps = times.length;
        dispatch(tickLoop({ fps }));
      });
    });

    dispatch(startLoop());

    return store;
  };
}
