import { call, put, select } from 'redux-saga/effects';
import { getCharacterData } from '../StarwarsAPI';
import * as types from '../containers/constants';
import { selectId } from '../containers/selectors';

export default function* getCharacter() {
  const payload = yield select(selectId());
  console.log(`payload: ${payload}`);
  try {
    const charData = yield call(getCharacterData, payload);
    yield [
      put({ type: types.INIT_DATA, charData }),
    ];
  } catch (error) {
    yield put({ type: types.ERROR, error });
  }
}
