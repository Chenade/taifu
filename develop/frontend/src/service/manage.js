import axios from 'axios';

const Axios = axios.create({
  baseURL: '/api',
});

Axios.interceptors.request.use((config) => {
  config.params = {
    token: localStorage.getItem('token'),
    ...config.params,
  };
  return config;
});

Axios.interceptors.response.use(
  (response) => {
    const { data } = response;
    const { success, message, token } = data;

    if (success) {
      localStorage.setItem('token', token);
      alert('Success');
      return null;
    }
    throw new Error(message);
  },
  (error) => {
    const { response } = error;
    const { data } = response;
    const { success, message } = data;

    if (success) return response;
    throw new Error(message);
  }
);

export default Axios;
