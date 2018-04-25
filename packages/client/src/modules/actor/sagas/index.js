import { takeLatest } from 'redux-saga/effects';

import { actorLoopWatcher } from './loop';
import { actionTypes as actorStatusActionTypes } from '../actions/status';

export default function* actorSaga() {
  yield takeLatest(actorStatusActionTypes.SPAWN, actorLoopWatcher);
}
