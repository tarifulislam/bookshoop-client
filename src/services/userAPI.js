// For User related API Calls [TODO]
import axios from "axios";
const baseUrl = 'https://book-shop-management-system-server.vercel.app/api/v1/';

export const login = async (indentifier, password) => {
  try {
    const response = await axios.post(`${baseUrl}auth/login`, { indentifier, password });
    return response?.data;
  } catch (error) {
    console.error(error);

  }
}