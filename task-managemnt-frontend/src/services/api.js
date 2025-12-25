

import axios from "axios";

const api = axios.create({
  baseURL: "https://task-management-backend-1-1e33.onrender.com",
});

api.interceptors.request.use((config) => {
  const token =
    localStorage.getItem("token") ||
    sessionStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
