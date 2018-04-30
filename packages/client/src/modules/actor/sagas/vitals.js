import { put } from 'redux-saga/effects';

import ACTOR_CONSTANTS from '../constants';
import { updateEnergy, updateHydration } from '../actions/vitals';

export default function* vitalsSaga() {
  yield put(updateEnergy(-1 * ACTOR_CONSTANTS.MALE_CALORIES_BURN_RATE_SECOND));
  yield put(updateHydration(-1 * ACTOR_CONSTANTS.MALE_HYDRATION_BURN_RATE_SECOND));
}
