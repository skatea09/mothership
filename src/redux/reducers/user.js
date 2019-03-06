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
      console.log('orgId', organizationId);
      return { ...state, id, firstName, lastName, organizationId };
    }
    case "FETCH_USER_REQUEST": {
      console.log('heeeere', payload);
      return state;
    }
    default:
      return state;
  }
};

export default user;
