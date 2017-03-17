import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';
import rootSaga from './sagas/index';

const store = () => {
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return {
    ...createStore(
      createReducer(),
      composeEnhancers(
      applyMiddleware(sagaMiddleware))),
      runSaga: sagaMiddleware.run(rootSaga),
  };
};

export default store;
