export const actionTypes = {
  SPAWN: '@ROTTEN/ACTOR/CHARACTER/SPAWN',
  UNSPAWN: '@ROTTEN/ACTOR/CHARACTER/UNSPAWN'
};

export const spawn = options => ({
  type: actionTypes.SPAWN,
  payload: { ...options }
});

export const unspawn = () => ({
  type: actionTypes.UNSPAWN
});
