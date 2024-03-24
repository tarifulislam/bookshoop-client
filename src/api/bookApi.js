import { axiosBaseQuery } from '../helpers/axios/baseQuery';

export const bookApi = {
  getAllNewBooks: async () =>
    axiosBaseQuery({
      url: `/books/new`,
      method: 'GET'
    }),
    getAllBooks: async () =>
    axiosBaseQuery({
      url: `/books`,
      method: 'GET'
    }),
};

export default bookApi;