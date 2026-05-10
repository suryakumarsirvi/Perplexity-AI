import axios from "axios";

export const API = axios.create({
    baseURL: 'http://localhost:5000/api',
    withCredentials: true
});

API.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        
        // If error is 401 and we haven't retried this request yet
        if (error.response?.status === 401 && !originalRequest._retry) {
            // Prevent infinite retry loops if the /refresh endpoint itself returns 401
            if (originalRequest.url.includes('/auth/refresh')) {
                return Promise.reject(error);
            }
            
            originalRequest._retry = true;
            
            try {
                // Call refresh endpoint to get new cookies
                await API.get('/auth/refresh');
                
                // Retry the original request
                return API(originalRequest);
            } catch (refreshError) {
                // Refresh failed (e.g., refresh token expired)
                return Promise.reject(refreshError);
            }
        }
        
        return Promise.reject(error);
    }
);