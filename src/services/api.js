import axios from 'axios';

const BASE_URL = 'https://api.rentpeylo.com';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const login = async (credentials) => {
  try {
    const response = await api.post('/oauth/token', {
      grant_type: 'password',
      username: credentials.email,
      password: credentials.password,
      role: 'customer',
      email: credentials.email,
    });
    return response.data;
  } catch (error) {
    if (error.response?.data?.message) {
      throw new Error(error.response.data.message);
    } else if (error.response?.data?.error) {
      throw new Error(error.response.data.error);
    } else {
      throw new Error('Network error occurred');
    }
  }
};

export default api;
