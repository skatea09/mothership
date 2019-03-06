import axios from 'axios';

// user api
export const fetchUserApi = userId =>
  axios.get(`https://challenge.mothership.com/user/${userId}`);

// billing api
export const fetchBillingApi = organizationId =>
  axios.get(
    `https://challenge.mothership.com/organization/${organizationId}/billing`
  );
