import { parseCookies } from "nookies";

export const getAccessToken = async () => {
  const cookies = parseCookies();

  return cookies;
};
