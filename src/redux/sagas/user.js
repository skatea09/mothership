import { put, takeLatest, call, select } from "redux-saga/effects";
import {
  FETCH_USER_REQUEST,
  fetchUserSuccess,
  fetchUserFailure
} from "../actions/user";
import { fetchUserApi } from '../../api';

function* fetchUserAsync() {
  const { user: { id } } = yield select();
  try {
    const {
      data: { user }
    } = yield call(fetchUserApi, id);
    yield put(fetchUserSuccess(user));
  } catch (error) {
    yield put(fetchUserFailure(error));
  }
}

function* watchFetchUser() {
  yield takeLatest(FETCH_USER_REQUEST, fetchUserAsync);
}

export default [watchFetchUser()];
