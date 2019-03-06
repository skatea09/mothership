import { takeLatest, select, call, put } from "redux-saga/effects";
import {
  FETCH_BILLING_REQUEST,
  fetchBillingSuccess,
  fetchBillingFailure
} from "../actions/billing";
import { fetchBillingApi } from '../../api';

function* fetchBillingAsync() {
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
  yield takeLatest(FETCH_BILLING_REQUEST, fetchBillingAsync);
}

export default [watchFetchBilling()];
