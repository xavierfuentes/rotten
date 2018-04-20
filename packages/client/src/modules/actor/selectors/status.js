import { getEnergy } from './vitals';

export const isAlive = state => getEnergy(state) > 0;
