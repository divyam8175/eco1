// src/axiosConfig.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://eco-b8cz.onrender.com/api/v1', // Set your backend base URL here
});

export default axiosInstance;
