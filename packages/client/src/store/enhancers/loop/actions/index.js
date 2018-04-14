export const actionTypes = {
  START_LOOP: '@ROTTEN/LOOP/START',
  TICK_LOOP: '@ROTTEN/LOOP/TICK',
  SUBSCRIBE: '@ROTTEN/LOOP/SUBSCRIBE',
  UNSUBSCRIBE: '@ROTTEN/LOOP/UNSUBSCRIBE'
};

export const startLoop = () => ({
  type: actionTypes.START_LOOP
});

export const tickLoop = ({ timestamp, fps }) => ({
  type: actionTypes.TICK_LOOP,
  payload: { timestamp, fps }
});

export const subscribe = ({ loop, cadence }) => ({
  type: actionTypes.SUBSCRIBE,
  payload: { loop, cadence }
});

export const unsubscribe = ({ loop }) => ({
  type: actionTypes.UNSUBSCRIBE,
  payload: { loop }
});
