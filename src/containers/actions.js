import {
  INIT_DATA,
  ERROR,
  NEW_ID,
} from './constants';

export const initData = () => ({
  type: INIT_DATA,
});

export const newId = (id) => ({
  type: NEW_ID,
  id,
});

export const error = (data) => ({
  type: ERROR,
  data,
});
