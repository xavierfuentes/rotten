import { put } from 'redux-saga/effects';

import { updateEnergy } from '../actions/vitals';

export default function* vitalsSaga() {
  yield put(updateEnergy(-1));
}
