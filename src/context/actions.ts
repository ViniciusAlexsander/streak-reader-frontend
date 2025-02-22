"use server";

import { cookies } from "next/headers";

export const obterToken = async () => {
  const token = (await cookies()).get("access_token");

  return token;
};
