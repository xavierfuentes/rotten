export const getEnergy = state => state.actor.vitals.energy;
export const getHydration = state => state.actor.vitals.hydration;
export const getStamina = state => state.actor.vitals.stamina;
export const isAlive = state => getEnergy(state) > 0 && getHydration(state) > 0 && getStamina(state) > 0;
