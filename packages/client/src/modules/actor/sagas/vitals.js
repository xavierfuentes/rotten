import { put, select } from 'redux-saga/effects';

import CORE_CONSTANTS from '../../core/constants';
import ACTOR_CONSTANTS from '../constants';
import { updateEnergy, updateHydration } from '../actions/vitals';
import { getGender } from '../selectors/character';

export default function* vitalsSaga() {
  const actorGender = yield select(getGender);
  // MALE_CALORIES_BURN_RATE_DAY / CORE_CONSTANTS.DAY_DURATION
  const CALORIES_PER_DAY = -1 * ACTOR_CONSTANTS[`${actorGender}_CALORIES_BURN_RATE_DAY`];
  const CALORIES_PER_SECOND = CALORIES_PER_DAY / CORE_CONSTANTS.DAY_DURATION;
  const HYDRATION_PER_DAY = -1 * ACTOR_CONSTANTS[`${actorGender}_HYDRATION_BURN_RATE_DAY`];
  const HYDRATION_PER_SECOND = HYDRATION_PER_DAY / CORE_CONSTANTS.DAY_DURATION;
  // const STAMINA_PER_DAY = -1 * ACTOR_CONSTANTS[`${actorGender}_STAMINA_BURN_RATE_DAY`]
  // const STAMINA_PER_SECOND = STAMINA_PER_DAY / CORE_CONSTANTS.DAY_DURATION;

  yield put(updateEnergy(CALORIES_PER_SECOND));
  yield put(updateHydration(HYDRATION_PER_SECOND));
  // yield put(updateStamina(STAMINA_PER_SECOND));
}
