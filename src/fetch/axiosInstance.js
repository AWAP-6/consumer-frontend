import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://awap-6server.onrender.com', 
});

export default axiosInstance;