import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5500/api",
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    refreshtoken: `${localStorage.getItem("refreshToken")}`,
    "Content-Type": "multipart/form-data",
  },
});

// list all endpoints

// auth endpoints
export const login = (data) => api.post("/auth/login", data);
export const logoutUser = () => api.get("/auth/logout");
export const registerAdmin = (data) => api.post("/auth/register/admin", data);

// user endpoints
export const getAllUsers = (page, limit) =>
  api.get(`/super/users?page=${page}&limit=${limit}`);
export const searchUser = (search) => api.get(`/users/search?search=${search}`);
export const updateUser = (id, data) => api.put(`/user-update/${id}`, data);

// get count
export const getCount = () => api.get("/super/count");

// Interceptor for handling 401 errors
api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      originalRequest &&
      !originalRequest.isRetry
    ) {
      originalRequest.isRetry = true;
      try {
        await axios.get(`${"http://localhost:5500/api"}/auth/refresh`, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            refreshtoken: `${localStorage.getItem("refreshToken")}`,
          },
        });

        return api.request(originalRequest);
      } catch (err) {
        console.log(err.message);
      }
    }

    throw error;
  }
);

export default api;
