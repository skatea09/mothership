import axios from "axios";

export const fetchBilling = () => async (dispatch, getState) => {
  const { organizationId } = getState().user;
  return axios
    .get(
      `https://challenge.mothership.com/organization/${organizationId}/billing`
    )
    .then(res => {
      const { data } = res;
      console.log('daaaata', data);
        dispatch({
          type: 'FETCH_BILLING_SUCCESS',
          payload: { billing: data }
        })
      console.log('other res', res);
    })
    .catch(error => {
      return Promise.reject(error);
    });
};
