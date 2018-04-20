import { all, take, put, select, fork } from 'redux-saga/effects';

import { actionTypes as loopActionTypes } from '../../../store/enhancers/loop/actions';
// import { die } from '../actions/status';
import { isAlive } from '../selectors/status';
import { updateEnergy } from '../actions/vitals';

// todo: listen for the actor to be spawned
// start the sagas: vitals, status, etc.

export function* actorLoopWatcher() {
  let lastAnimationFrameTime = 0;

  while (yield select(isAlive)) {
    const {
      payload: { timestamp: curentAnimationFrameTime }
    } = yield take(loopActionTypes.TICK_LOOP);

    if (
      !lastAnimationFrameTime ||
      curentAnimationFrameTime - lastAnimationFrameTime >= 1000 // ms
    ) {
      lastAnimationFrameTime = curentAnimationFrameTime;
      yield fork(actorLoopWorker);
    }
  }
}

function* actorLoopWorker() {
  yield all([vitalsSaga()]);
}

function* vitalsSaga() {
  yield put(updateEnergy(-1));
}
