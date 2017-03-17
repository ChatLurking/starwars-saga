import { createSelector } from 'reselect';

const selectGlobal = () => (state) => state.global;

const selectId = () => createSelector(
  selectGlobal(),
  (gState) => gState.get('id'),
);

export {
  selectGlobal,
  selectId,
};
