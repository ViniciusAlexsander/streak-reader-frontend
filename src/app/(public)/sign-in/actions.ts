"use server";

import { ILoginRequest } from "models/login";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { postLogin } from "repositories/loginRepository";

export const login = async (body: ILoginRequest) => {
  const res = await postLogin(body);

  (await cookies()).set("access_token", res.access_token, {
    path: "/",
    maxAge: 60 * 60,
    secure: true,
    httpOnly: true,
  });

  redirect("/");
};
