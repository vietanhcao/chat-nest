import axios from 'axios';
import { LoginPayload } from 'src/features/auth/authSlice';
import axiosClient from './axiosClient';

const authApi = {
  postLogin: (data: LoginPayload) => {
    const url = process.env.REACT_APP_API_URL + '/api/authentication/log-in';
    return axios.post(url, data);
  },
  postVerifyPin: (pin: string, user: string) => {
    const url = `/am/admin/users/verifyPin/${user}`;
    return axiosClient.post(url, { pin });
  },
};

export default authApi;
