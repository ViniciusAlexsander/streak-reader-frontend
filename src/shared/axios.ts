import axios from "axios";
import { getAccessToken } from "./tokenUtils";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

axiosInstance.interceptors.request.use(async function (config) {
  // const accessToken = await getAccessToken();
  // config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});

export default axiosInstance;
