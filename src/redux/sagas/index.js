import { all } from 'redux-saga/effects';
import userSagas from './user';
import billingSagas from './billing';


export default function* rootSaga() {
  yield all([
    ...userSagas,
    ...billingSagas,
  ])
}
