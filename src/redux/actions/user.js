import axios from "axios";

export const fetchUser = userId => async dispatch => {
  return axios
    .get(`https://challenge.mothership.com/user/${userId}`)
    .then(res => {
      const { data: { user } } = res;
      dispatch({
        type: "FETCH_USER_SUCCESS",
        payload: { user }
      });
    })
    .catch(error => {
      return Promise.reject(error);
    });
};
