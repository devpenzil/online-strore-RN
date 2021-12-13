import axios from 'axios';
import SharedPreferences from 'react-native-shared-preferences';
const base = axios.create({
  baseURL: 'https://ajosapp-server.vercel.app/',
});
export const token = SharedPreferences.getItem('token', function (value) {
  return value;
});
console.log(token);
export default base;
