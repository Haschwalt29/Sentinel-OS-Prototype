import axios from 'axios';

const api = axios.create({
  baseURL: '/api', // The proxy will handle this
});

export default api; 