import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const reducer = combineReducers({ ...reducers });

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
