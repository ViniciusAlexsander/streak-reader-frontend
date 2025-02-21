import { UserProgress } from "@/components/userProgress";
import { getUserData } from "./actions";

export default async function Dashboard() {
  const userData = await getUserData();

  return <UserProgress userData={userData} />;
}
