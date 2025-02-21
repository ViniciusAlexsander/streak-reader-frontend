export interface IUserStreaks {
  dailyStreak: number;
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
