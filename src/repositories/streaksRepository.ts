import { IRankingStreaks, IUserStreaks } from "models/streaks";
import axiosInstance from "shared/axios";

const getUserStreaks = async (email: string): Promise<IUserStreaks> => {
  const response = await axiosInstance.get<IUserStreaks>(`/streaks/${email}`);

  return response.data;
};

const getRankingStreaks = async ({
  page,
  pageSize,
  month,
  year,
}: {
  page: number;
  pageSize: number;
  year?: number;
  month?: number;
}): Promise<IRankingStreaks> => {
  const response = await axiosInstance.get<IRankingStreaks>("/ranking", {
    params: {
      pageSize,
      page,
      year,
      month,
    },
  });

  return response.data;
};

export { getUserStreaks, getRankingStreaks };
