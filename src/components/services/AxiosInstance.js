import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://finpay-backend.onrender.com/api/auth', 
  
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Add Authorization Token if available
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle Unauthorized Access
    if (error.response && error.response.status === 401) {
      console.error('Unauthorized! Redirecting to login...');
      // You can add logout logic here
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
