import axios from "axios";
import { getAccessToken } from "./tokenUtils";

const axiosInstance = axios.create({
  baseURL: process.env.BACKEND_URL,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(async function (config) {
  // const accessToken = await getAccessToken();
  // config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});

export default axiosInstance;
