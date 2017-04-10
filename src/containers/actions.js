import {
  INIT_DATA,
  ERROR,
  NEW_ID,
} from './constants';

export const initData = () => ({
  type: INIT_DATA,
});

export const newId = (data) => ({
  type: NEW_ID,
  data,
});

export const error = (data) => ({
  type: ERROR,
  data,
});
