import { all, put, select, take } from 'redux-saga/effects';

import { actionTypes as loopActionTypes } from '../../../store/enhancers/loop/actions';
import { unspawn } from '../actions/character';
import vitalsSaga from './vitals';
import { isAlive } from '../selectors/vitals';

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

      yield all([vitalsSaga()]);
    }
  }

  // yield die saga
  yield put(unspawn());
}
