const initialState = {
  isFetching: false,
  id: "u2kjfladadwddj9",
  firstName: "",
  lastName: "",
  organizationId: ""
};

const user = (state = initialState, { type, payload }) => {
  switch (type) {
    case "FETCH_USER_SUCCESS": {
      const {
        user: { id, firstName, lastName, organizationId }
      } = payload;
      return { ...state, id, firstName, lastName, organizationId };
    }
    case "FETCH_USER_REQUEST": {
      return {...state, isFetching: true };
    }
    case "FETCH_USER_FAILURE": {
      const { error } = payload;
      return {...state, isFetching: false, error };
    }
    default:
      return state;
  }
};

export default user;
