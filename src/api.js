import axios from 'axios';

const api = axios.create({
  baseURL: 'https://49f8-2409-4090-801b-760f-2cd9-bea4-b61a-fca9.ngrok-free.app',
  withCredentials: true,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
});



export default api;