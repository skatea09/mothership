import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

console.log('thunk', thunk);

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
