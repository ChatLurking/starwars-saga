import { takeEvery } from 'redux-saga/effects';
import {  NEW_ID } from '../containers/constants';
import getCharacterSaga from './getCharacterSaga';

export default function* watcher() {
  yield takeEvery(NEW_ID, getCharacterSaga);
}
