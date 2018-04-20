import { take, put, select, fork } from 'redux-saga/effects';

import { actionTypes as loopActionTypes } from '../../../store/enhancers/loop/actions';
import { die } from '../actions/status';
import { hasEnergy } from '../selectors/status';
import { updateEnergy } from '../actions/vitals';

export function* actorLoopWatcher() {
  let lastAnimationFrameTime = 0;

  while (yield select(hasEnergy)) {
    const {
      payload: { timestamp: curentAnimationFrameTime }
    } = yield take(loopActionTypes.TICK_LOOP);

    if (
      !lastAnimationFrameTime ||
      curentAnimationFrameTime - lastAnimationFrameTime >= 1000 // ms
    ) {
      lastAnimationFrameTime = curentAnimationFrameTime;
      const vitals = yield fork(vitalsWorker);
    }
  }

  yield put(die());
}

function* vitalsWorker() {
  yield put(updateEnergy(-1));
}
