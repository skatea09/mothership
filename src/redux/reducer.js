const initialState = {
  isFetching: false
}

const rootReducer = (state = initialState, { type, payload }) => {
  switch(type) {
    default:
      console.log('working redux');
      return state;
  }
}

export default rootReducer;
