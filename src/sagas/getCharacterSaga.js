import { call, put, select } from 'redux-saga/effects';
import { getCharacterData } from '../StarwarsAPI';
import { INIT_DATA, ERROR } from '../containers/constants';
import { selectId } from '../containers/selectors';

export default function* getCharacterSaga() {
  const payload = yield select(selectId());
  try {
    const charData = yield call(getCharacterData, payload);
    yield [
      put({ type: INIT_DATA, charData }),
    ];
  } catch (error) {
    yield put({ type: ERROR, error });
  }
}
