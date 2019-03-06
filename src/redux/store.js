import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware()

const reducer = combineReducers({ ...reducers });

const store = createStore(reducer, applyMiddleware(sagaMiddleware, thunk));
sagaMiddleware.run(rootSaga)

export default store;
