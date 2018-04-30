import { getEnergy, getHydration, getStamina } from './vitals';

export const isAlive = state => getEnergy(state) > 0 && getHydration(state) > 0 && getStamina(state) > 0;
