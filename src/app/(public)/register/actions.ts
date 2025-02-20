"use server";

import { ICreateUserRequest } from "models/user";
import { postCreateUser } from "repositories/userRepository";

export const createUser = async (body: ICreateUserRequest) => {
  await postCreateUser(body);
};
