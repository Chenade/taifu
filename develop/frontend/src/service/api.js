import axios from 'axios';

const Axios = axios.create({
  baseURL: '/api',
});

Axios.interceptors.response.use(
  (response) => {
    const { data } = response;
    const { success, message } = data;

    if (success) return data.data;
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
