import { put, select, takeLatest } from 'redux-saga/effects';

import ACTOR_CONSTANTS from '../constants';
import { actorLoopWatcher } from './loop';
import { actionTypes as actorCharacterActionTypes } from '../actions/character';
import { updateEnergy, updateHydration, updateStamina } from '../actions/vitals';

export default function* actorSaga() {
  yield takeLatest(actorCharacterActionTypes.SPAWN, function*() {
    // initialises the actor
    const { character } = yield select(state => state.actor);

    const INITIAL_CALORIES =
      ACTOR_CONSTANTS.MAX_DAYS_WITHOUT_FOOD * ACTOR_CONSTANTS[`${character.gender}_CALORIES_BURN_RATE_DAY`];
    const INITIAL_HYDRATION =
      ACTOR_CONSTANTS.MAX_DAYS_WITHOUT_WATER * ACTOR_CONSTANTS[`${character.gender}_HYDRATION_BURN_RATE_DAY`];
    const INITIAL_STAMINA =
      ACTOR_CONSTANTS.MAX_DAYS_WITHOUT_REST * ACTOR_CONSTANTS[`${character.gender}_STAMINA_BURN_RATE_DAY`];

    yield put(updateEnergy(INITIAL_CALORIES));
    yield put(updateHydration(INITIAL_HYDRATION));
    yield put(updateStamina(INITIAL_STAMINA));

    // starts the actor's loop
    yield actorLoopWatcher();
  });
}
