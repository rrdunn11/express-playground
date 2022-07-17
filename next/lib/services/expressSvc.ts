import axios from 'axios';

const expressSvc = axios.create({
  baseURL: 'http://server:4000',
});

expressSvc.interceptors.request.use((config) => {
  console.log('REQUEST CONFIG: ', config);
  return config;
}, (error) => {
  console.log('REQUEST ERROR: ', error);
  return Promise.reject(error);
});

expressSvc.interceptors.response.use((response) => {
  console.log('RESPONSE: ', response);
  return response;
}, (error) => {
  console.log('RESPONSE ERROR: ', error);
  return Promise.reject(error);
});

export default expressSvc;
