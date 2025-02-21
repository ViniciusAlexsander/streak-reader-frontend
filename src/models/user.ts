export interface ICreateUserRequest {
  email: string;
  name: string;
  password: string;
}

export interface IUserProfileResponse {
  name: string;
  sub: number;
  email: string;
  iat: number;
  exp: number;
}
