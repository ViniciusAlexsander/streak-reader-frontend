"use server";

import { UserSession } from "context/AuthContext";
import jwt from "jsonwebtoken";
import { revalidatePath } from "next/cache";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";

export const logout = async () => {
  (await cookies()).delete("access_token");

  redirect("/sign-in");
};

export const isAdminFunction = async () => {
  const authToken = (await cookies()).get("access_token");
  let decodedUser;
  if (authToken) decodedUser = jwt.decode(authToken.value) as UserSession;

  return decodedUser.role === "admin";
};
