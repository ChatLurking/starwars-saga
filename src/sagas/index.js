import { fork } from 'redux-saga/effects';
import getCharacter from './getCharacter';

export default function* startForman() {
  yield fork(getCharacter);
}
