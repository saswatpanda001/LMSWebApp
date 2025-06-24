import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000',
  withCredentials: true,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
});

// Add CSRF token handling
api.defaults.xsrfCookieName = 'csrftoken';
api.defaults.xsrfHeaderName = 'X-CSRFToken';

let isRefreshing = false;
let failedRequestsQueue = [];


const refreshTokens = async () => {
  try {
    const response = await api.post('/auth/api/token/refresh/');
    console.log("token_refresh1")
    return true;
  } catch (error) {
    // If refresh fails, clear user data and redirect to login
    sessionStorage.clear();
    window.location.href = '/login';
    return false;
  }
};


api.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;
    
    // If 401 error and it's not a refresh request
    if (error.response?.status === 401 && !originalRequest._retry && originalRequest.url !== '/auth/api/token/refresh/') {
      console.log("token_refresh2")
      if (isRefreshing) {
        // If already refreshing, add to queue
        return new Promise((resolve, reject) => {
          failedRequestsQueue.push({ resolve, reject });
        }).then(() => {
          return api(originalRequest);
        }).catch(err => {
          return Promise.reject(err);
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const refreshSuccess = await refreshTokens();
        console.log("token_refresh3")
        
        if (refreshSuccess) {
          // Retry original request
          return api(originalRequest);
        }
        
        return Promise.reject(error);
      } catch (refreshError) {
        // Clear queue and reject all
        failedRequestsQueue.forEach(p => p.reject(refreshError));
        failedRequestsQueue = [];
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);


const setupTokenRefresh = () => {
  setInterval(async () => {
    console.log("token_refresh4")
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (user) {
      try {
        await refreshTokens();
        console.log("Token automatically refreshed");
      } catch (error) {
        console.error("Automatic token refresh failed:", error);
      }
    }
  }, 20 * 60 * 1000);
};

setupTokenRefresh();

export default api;