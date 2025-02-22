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

export interface IRankingStreaks {
  users: User[];
  pagination: Pagination;
}

export interface User {
  email: string;
  actualStreak: number;
  recordStreak: number;
  updatedAt: string;
  _count: {
    readPosts: number;
  };
}

export interface Pagination {
  totalCount: number;
  totalPages: number;
  currentPage: number;
  pageSize: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}
