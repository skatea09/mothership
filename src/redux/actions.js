import axios from 'axios';

export const fetchUser = (userId) => async (dispatch) => {
  axios.get(`https://challenge.mothership.com/user/${userId}`).then(res => {
    console.log('ress', res);
    axios.get(`https://challenge.mothership.com/organization/${res.data.user.organizationId}/billing`).then(res => {
      console.log('ress billing', res);
    })
  })
}
