import axios from "axios";
import { store } from "@/redux/store";
import { setAuthToken } from "@/redux/counterSlice";


// Create a custom axios instance with default configuration
const axiosClient = axios.create({
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Request interceptor for adding auth token
axiosClient.interceptors.request.use(
  config => {
    const token = store.getState().counter.authToken;
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  error => Promise.reject(error)
);

// Response interceptor for handling common errors
axiosClient.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      // Could dispatch to redux store: 
      store.dispatch(setAuthToken(""));
    }
    return Promise.reject(error);
  }
);

export default axiosClient;



