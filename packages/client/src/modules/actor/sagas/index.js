import { all } from 'redux-saga/effects';

import { actorLoopWatcher } from './loop';

export default function* actorSaga() {
  yield all([actorLoopWatcher()]);
}
