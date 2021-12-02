import axios from "axios";

const baseURL = process.env.BASE_URL || "http://localhost:5000/api";

const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
