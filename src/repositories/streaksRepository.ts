import { IUserStreaks } from "models/streaks";
import axiosInstance from "shared/axios";

const getUserStreaks = async (email: string): Promise<IUserStreaks> => {
  const response = await axiosInstance.get<IUserStreaks>(`/streaks/${email}`);

  return response.data;
};

export { getUserStreaks };
