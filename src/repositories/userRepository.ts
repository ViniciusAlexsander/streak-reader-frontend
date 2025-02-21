import { ICreateUserRequest, IUserProfileResponse } from "models/user";
import axiosInstance from "shared/axios";

const postCreateUser = async (body: ICreateUserRequest): Promise<void> => {
  await axiosInstance.post("/user", body);
};

const getUserProfile = async (): Promise<IUserProfileResponse> => {
  const response = await axiosInstance.get("/auth/profile");
  return response.data;
};

export { postCreateUser, getUserProfile };
