import { createStore as reduxCreateStore, applyMiddleware } from "redux";
import reducer from './reducers'
import middleware from './middlewares'
import createSagaMiddleware from 'redux-saga'

export default function createStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = reduxCreateStore(
    reducer,
    applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(middleware)

  return store;
}
