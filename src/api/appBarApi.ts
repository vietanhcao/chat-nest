import axiosClient from './axiosClient';

const appBarApi = {
  getTradingSessionDate: () => {
    const url = `/config/public/tradingSessionDate`;
    return axiosClient.get(url);
  },

  postTableSetting: (data: any) => {
    const url = `/am/admin/users/tableSetting`;
    return axiosClient.post(url, data);
  },
};

export default appBarApi;
