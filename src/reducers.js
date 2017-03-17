import { combineReducers } from 'redux';
import globalReducer from './reducer/index';

export default function createReducer(asyncReducers) {
  return combineReducers({
    global: globalReducer,
    ...asyncReducers,
  });
}
