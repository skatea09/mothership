const initialState = {
  isFetching: false,
  balance: null,
  items: [],
  paymentMethods: [],
  error: ""
}

const billing = (state = initialState, { type, payload }) => {
  switch(type) {
    case "FETCH_BILLING_SUCCESS": {
      const { billing: { balance, items, paymentMethods } } = payload;
      return { ...state, isFetching: false, balance, items, paymentMethods };
    }
    case "FETCH_BILLING_REQUEST": {
      return {...state, isFetching: true };
    }
    case "FETCH_BILLING_FAILURE": {
      const { error } = payload;
      return {...state, isFetching: false, error };
    }
    default:
      return state;
  }
}

export default billing;
