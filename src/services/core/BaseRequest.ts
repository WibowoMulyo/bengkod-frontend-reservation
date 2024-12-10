import Axios from "axios";

const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
  },
})

// Axios Interceptor: Response Method
axios.interceptors.response.use(
  (response) => {
      return response;
  },
  (error) => {
      return Promise.reject(error);
  }
);

export default axios;