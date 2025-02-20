import { ILoginRequest, ILoginResponse } from "models/login";
import { setCookie } from "nookies";
import axiosInstance from "shared/axios";

const postLogin = async (body: ILoginRequest) => {
  const response = await axiosInstance.post<ILoginResponse>(
    "/auth/login",
    body
  );

  // setCookie(null, "access_token", response.data.access_token, {
  //   maxAge: 30 * 24 * 60 * 60,
  //   path: "/",
  // });
};

export { postLogin };
