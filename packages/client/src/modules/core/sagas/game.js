import { all } from 'redux-saga/effects';

import actorSaga from '../../actor/sagas';

export default function* gameSaga() {
  yield all([actorSaga()]);
}
