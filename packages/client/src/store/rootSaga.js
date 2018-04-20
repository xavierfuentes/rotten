import { all } from 'redux-saga/effects';

import actorSaga from '../modules/actor/sagas';

export default function* rootSaga() {
  yield all([actorSaga()]);
}
