import axios from 'axios';

const base = axios.create({
  baseURL: 'https://ajosapp-server.vercel.app/',
});

export default base;
