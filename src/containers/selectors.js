import { createSelector } from 'reselect';

const selectGlobal = () => (state) => state.global;

const selectId = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('id'),
);

const selectCharData = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('charData').toJS(),
);

export {
  selectGlobal,
  selectId,
  selectCharData,
};
