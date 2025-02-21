"use server";

import { cookies } from "next/headers";

export const getAccessToken = async () => {
  return (await cookies()).get("access_token")?.value || null;
};
