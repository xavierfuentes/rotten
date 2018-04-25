import { all } from 'redux-saga/effects';

import gameSaga from '../modules/core/sagas/game';

export default function* rootSaga() {
  yield all([gameSaga()]);
}
