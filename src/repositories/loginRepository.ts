import { ILoginRequest, ILoginResponse } from "models/login";
import { setCookie } from "nookies";
import axiosInstance from "shared/axios";

const postLogin = async (body: ILoginRequest): Promise<ILoginResponse> => {
  const response = await axiosInstance.post<ILoginResponse>(
    "/auth/login",
    body
  );

  return response.data;
};

export { postLogin };
