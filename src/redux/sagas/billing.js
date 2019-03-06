import axios from "axios";
import { takeLatest, select, call, put } from "redux-saga/effects";
import {
  FETCH_BILLING_REQUEST,
  fetchBillingSuccess,
  fetchBillingFailure
} from "../actions/billing";

const fetchBillingApi = organizationId =>
  axios.get(
    `https://challenge.mothership.com/organization/${organizationId}/billing`
  );

function* fetchBillingAsync() {
  console.log('async');
  const {
    user: { organizationId }
  } = yield select();
  try {
    const { data } = yield call(fetchBillingApi, organizationId);
    yield put(fetchBillingSuccess(data));
  } catch (error) {
    yield put(fetchBillingFailure(error));
  }
}

function* watchFetchBilling() {
  console.log('taking latest')
  yield takeLatest(FETCH_BILLING_REQUEST, fetchBillingAsync);
}

export default [watchFetchBilling()];
