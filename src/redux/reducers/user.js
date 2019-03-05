const initialState = {
  isFetching: false,
  id: '',
  firstName: '',
  lastName: '',
  organizationId: '',
}

const user = (state = initialState, { type, payload }) => {
  switch(type) {
    case "FETCH_USER_SUCCESS": {
      const { user: { id, firstName, lastName, organizationId } } = payload;
      return { ...state, id, firstName, lastName, organizationId };
    }
    default:
      return state;
  }
}

export default user;
