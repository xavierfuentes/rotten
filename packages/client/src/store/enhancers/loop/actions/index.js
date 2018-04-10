export const actionTypes = {
  START_LOOP: '@ROTTEN/LOOP/START',
  TICK_LOOP: '@ROTTEN/LOOP/TICK'
};

export const startLoop = () => ({
  type: actionTypes.START_LOOP
});

export const tickLoop = ({ timestamp, fps }) => {
  return { type: actionTypes.TICK_LOOP, payload: { timestamp, fps } };
};
