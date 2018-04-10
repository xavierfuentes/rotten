export const actionTypes = {
  UPDATE_ENERGY: 'UPDATE_ENERGY',
  UPDATE_HYDRATION: 'UPDATE_HYDRATION',
  UPDATE_STAMINA: 'UPDATE_STAMINA'
};

export const updateEnergy = energy => ({
  type: actionTypes.UPDATE_ENERGY,
  payload: { energy }
});

export const updateHydration = hydration => ({
  type: actionTypes.UPDATE_HYDRATION,
  payload: { hydration }
});

export const updateStamina = stamina => ({
  type: actionTypes.UPDATE_STAMINA,
  payload: { stamina }
});

// export const eat = () => dispatch => {};

// export const drink = () => dispatch => {};

// export const rest = () => dispatch => {};
