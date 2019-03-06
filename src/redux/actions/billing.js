export const FETCH_BILLING_REQUEST = 'FETCH_BILLING_REQUEST';
export const FETCH_BILLING_SUCCESS = 'FETCH_BILLING_SUCCESS';
export const FETCH_BILLING_FAILURE = 'FETCH_BILLING_FAILURE';

export const fetchBilling = () => ({
  type: FETCH_BILLING_REQUEST,
});

export const fetchBillingSuccess = billing => ({
  type: FETCH_BILLING_SUCCESS,
  payload: { billing }
});

export const fetchBillingFailure = error => ({
  type: FETCH_BILLING_FAILURE,
  payload: { error }
})
