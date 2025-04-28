import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.finuniques.in/api', 
  // baseURL: 'https://finpay-b2c-backend.onrender.com/api', 
  
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);


axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    
    if (error.response && error.response.status === 401) {
      console.error('Unauthorized! Redirecting to login...');
     
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
