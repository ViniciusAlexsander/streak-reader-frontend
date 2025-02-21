import { getUserStreaks } from "repositories/streaksRepository";
import { getUserProfile } from "repositories/userRepository";

export async function getUserData() {
  const user = await getUserProfile();

  const userStreaks = await getUserStreaks(user.email);

  return { user, userStreaks };
}
