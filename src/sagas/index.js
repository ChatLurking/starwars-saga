import { fork } from 'redux-saga/effects';
import Watcher from './watcher';

export default function* startForman() {
  yield fork(Watcher);
}
