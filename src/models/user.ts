export interface UserLogin {
  id: string;
  email: string;
  accessToken: string;
  deptCode: string;
  deptName: string;
  fullName: string;
  username: string;
  status: string;
  phoneNumber: string;
  functions: string[];
  tokenExpiration?: number;
  mustChangePassword?: boolean;
  logined?: boolean;
  [key: string]: any;
}
