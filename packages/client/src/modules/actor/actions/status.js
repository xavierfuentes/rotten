export const actionTypes = {
  SPAWN: '@ROTTEN/ACTOR/STATUS/SPAWN',
  UNSPAWN: '@ROTTEN/ACTOR/STATUS/UNSPAWN'
};

export const spawn = () => ({
  type: actionTypes.SPAWN
});

export const unspawn = () => ({
  type: actionTypes.UNSPAWN
});
