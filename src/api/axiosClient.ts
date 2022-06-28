import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import queriestring from 'query-string';
import { store } from '../app/store';
import { message } from 'antd';
import { authAction } from 'src/features/auth/authSlice';
import Message from 'src/components/Message';

// Set up default config for http requests here
// Please have a look at here `https://github.com/axios/axios#request- config` for the full list of configs

export const ourRequest = axios.CancelToken.source(); // <-- 1st step

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Accept: 'application/json',
    'content-type': 'application/json',
  },
  paramsSerializer: (queries) => queriestring.stringify(queries),
  cancelToken: ourRequest.token,
  validateStatus: function (status) {
    return (status >= 200 && status < 401) || status === 422;
  },
});

axiosClient.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    // Handle token here ...
    //JSON.parse(JSON.parse(window.localStorage["persist:admin-news"]).auth)?.accessToken
    let state = store.getState();
    const token = state?.auth?.accessToken;
    config.headers['Authorization'] = `Bearer ${token}`;
    // if (token) {
    //   if (config?.url.includes(process.env.REACT_APP_API_URL_DUNG_MEDIA)) {
    //     config.headers['Authorization'] = `${token}`
    //   } else if (config?.url.includes(process.env.REACT_APP_API_URL_NOTIFICATON)) {
    //     config.headers['Authorization'] = `${token}`
    //   } else {
    //     config.headers['Authorization'] = `Bearer ${token}`
    //   }
    // }
    // const currentUser = firebase.auth().currentUser
    // if (currentUser) {
    //   const token = await currentUser.getIdToken()
    //   config.headers = {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //     Authorization: `Bearer ${token}`,
    //   };
    // }

    // const token = await getFirebaseToken()

    // if(token){
    //   config.headers = {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //     Authorization: `Bearer ${token}`,
    //   }
    // }
    return config;
  },
  (error) => {
    //Do some thing
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    //response within the range of 2xx
    if (response && response.headers['content-disposition']) {
      // downlaod file excel
      return response;
    }
    if (response && response.data) {
      return response.data;
    }

    return response.data;
  },
  (error) => {
    // Handle errors

    const { status, data, config } = error.response;
    // console.log(status, data, config);
    if (typeof error.response === 'undefined') {
      // message.error(
      //   'A network error occurred. ' +
      //     'This could be a CORS issue or a dropped internet connection. ' +
      //     'It is not possible for us to know.',
      // )
      Message('error', 'Xảy ra lỗi !!!', 'Có lỗi xảy ra');
      // message.error('Có lỗi xảy ra');
    }

    if (status === 401) {
      // message.error('401');
      store.dispatch(authAction.logout());
    }
    if (status === 403) {
      Message('error', 'Xảy ra lỗi !!!', 'Bạn không có quyền thực hiện thao tác này');
      // message.error('Bạn không có quyền thực hiện thao tác này');
    }
    if (status === 500) {
      Message('error', 'Xảy ra lỗi !!!', 'Có lỗi xảy ra');
      // message.error('Có lỗi xảy ra');
    }

    // alert(i18n.t('Welcome to React'))
    throw error;
  }
);

export default axiosClient;
