import { IRankingStreaks, IUserStreaks } from "models/streaks";
import axiosInstance from "shared/axios";

const getUserStreaks = async (email: string): Promise<IUserStreaks> => {
  const response = await axiosInstance.get<IUserStreaks>(`/streaks/${email}`);

  return response.data;
};

const getRankingStreaks = async (
  page: number,
  pageSize: number
): Promise<IRankingStreaks> => {
  const response = await axiosInstance.get<IRankingStreaks>("/ranking", {
    params: {
      pageSize,
      page,
    },
  });

  return response.data;
};

export { getUserStreaks, getRankingStreaks };
