import axiosClient from './axiosClient';

const postsApi = {
  getPosts: (data: any) => {
    const url = process.env.REACT_APP_API_URL + '/api/posts?offset=0&limit=10';
    return axiosClient.get(url);
  },
  getComments: (id: string) => {
    const url = process.env.REACT_APP_API_URL + `/api/comment/${id}?offset=0&limit=10`;
    return axiosClient.get(url);
  },
};

export default postsApi;
