"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const logout = async () => {
  (await cookies()).delete("access_token");

  redirect("/sign-in");
};
