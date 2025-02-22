export interface IUserStreaks {
  goals: {
    actualStreak: number;
    recordStreak: number;
    totalReadPosts: number;
  };
  readPostHistory: IReadPost[];
}

export interface IReadPost {
  id: number;
  userEmail: string;
  resourceId: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmChannel: null;
  createdAt: Date;
  updatedAt: Date;
}
