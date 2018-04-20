export const actionTypes = {
  DEAD: '@ROTTEN/ACTOR/STATUS/DEAD',
  ALIVE: '@ROTTEN/ACTOR/STATUS/ALIVE'
};

export const live = () => ({
  type: actionTypes.ALIVE
});

export const die = () => ({
  type: actionTypes.DEAD
});
