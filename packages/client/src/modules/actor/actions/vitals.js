export const actionTypes = {
  UPDATE_HUNGER: 'UPDATE_HUNGER',
  UPDATE_THIRST: 'UPDATE_THIRST',
  UPDATE_FATIGUE: 'UPDATE_FATIGUE',
  UPDATE_ENERGY: 'UPDATE_ENERGY',
}

export const updateHunger = hunger => ({
  type: actionTypes.UPDATE_HUNGER,
  payload: { hunger },
});

export const updateThirst = thirst => ({
  type: actionTypes.UPDATE_THIRST,
  payload: { thirst },
});

export const updateFatigue = fatigue => ({
  type: actionTypes.UPDATE_FATIGUE,
  payload: { fatigue },
});

export const updateEnergy = energy => ({
  type: actionTypes.UPDATE_ENERGY,
  payload: { energy },
});

export const eat = () => dispatch => {};

export const drink = () => dispatch => {};

export const sleep = () => dispatch => {};

export const rest = () => dispatch => {};
