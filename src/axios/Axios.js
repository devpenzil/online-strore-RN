import axios from 'axios';

const base = axios.create({
  baseURL: 'https://ajosapp-server.vercel.app/',
});
export const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIzODBkYThjZTNmNTAwMDk1Y2UwYWUiLCJpYXQiOjE2MzkyMTQ2MDh9.Rv9r4_YRxA4GEzecFBpicqmqWb-QI9Csra2_a0DwNSc';
export default base;
