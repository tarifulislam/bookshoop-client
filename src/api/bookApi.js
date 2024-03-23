import { axiosBaseQuery } from '../helpers/axios/baseQuery';

export const bookApi = {
  getAllNewBooks: async () =>
    axiosBaseQuery({
      url: `/book/new`,
      method: 'GET'
    }),
};

export default bookApi;