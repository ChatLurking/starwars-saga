import { takeEvery } from 'redux-saga/effects';
import getCharacter from './getCharacter';
import { INIT_DATA } from '../containers/constants';

export default function* watcher() {
  yield* takeEvery(INIT_DATA, getCharacter);
}
