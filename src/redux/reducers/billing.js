const initialState = {
  isFetching: false,
  balance: null,
  items: [],
  paymentMethods: [],
}

const billing = (state = initialState, { type, payload }) => {
  switch(type) {
    case "FETCH_BILLING_SUCCESS": {
      const { billing: { balance, items, paymentMethods } } = payload;
      return { ...state, balance, items, paymentMethods };
    }
    case "FETCH_BILLING_REQUEST": {
      console.log('fetch billing request');
      return state;
    }
    default:
      return state;
  }
}

export default billing;
