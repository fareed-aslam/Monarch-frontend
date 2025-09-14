import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://monarch-backend.vercel.app/api",
  withCredentials: true,
});
