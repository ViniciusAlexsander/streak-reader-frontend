import { ICreateUserRequest } from "models/user";
import axiosInstance from "shared/axios";

const postCreateUser = async (body: ICreateUserRequest): Promise<void> => {
  await axiosInstance.post("/auth/login", body);
};

export { postCreateUser };
