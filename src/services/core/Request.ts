'use server'
import axios, { AxiosError } from "axios";
// import Cookies from 'js-cookie'
import { cookies } from "next/headers";
import { getServerSession } from "next-auth";
import { authOption } from "../../lib/auth";
// import axios from "./BaseRequest";
interface requestparams {
  type: 'get' | 'post' | 'put' | 'delete' | 'patch',
  url?: string,
  datas?: { [key: string]: any },
  headers?: string,
  params?: { [key: string]: any },
}

export async function RequestHttp({ type = 'get', url = '', datas = {}, headers = 'application/json', params = {} }: requestparams): Promise<any> {
  // const authkey = cookies().get('token')?.value ?? "";
  const session = await getServerSession(authOption);
  // return authkey
  const config = {
    method: type,
    url: process.env.NEXT_SECRET_API_BACKEND_URL+url,
    headers: {
      'Content-Type': headers,
      'Authorization': `Bearer ${session?.user.token}`,
    },
    params: {...params},
    data: datas,
  };
  // return {status: 'error', data: config};
  try {
    switch (type) {
      case 'get':
        return (await axios.request(config)).data
      case 'put':
        return (await axios.request(config)).data
      case 'post':
        return (await axios.request(config)).data
      case 'delete':
        return (await axios.request(config)).data
      case 'patch':
        return (await axios.request(config)).data
      default:
        throw new Error(`Metode HTTP '${type}' tidak dikenali.`);
    }
  } catch (err) {
    const errorAxios = err as AxiosError
    if (errorAxios.response) {
      const status = errorAxios.response.status;
      switch (status) {
        case 400:
          // console.error("Bad Request:", errorAxios.response.data);
          // throw new Error("Bad requestparams - Check parameters and try again.");
          return errorAxios.response.data
        case 401:
          // console.error("Unauthorized:", errorAxios.response.data);
          // throw new Error("Unauthorized - Please check your credentials.");
          return errorAxios.response.data
        case 404:
          // console.error("Not Found:", errorAxios.response.data);
          // throw new Error("Resource not found - Verify the URL.");
          return errorAxios.response.data
        case 500:
          // console.error("Internal Server Error:", errorAxios.response.data);
          // throw new Error("Server error - Try again later.");
          return errorAxios.response.data
        default:
          // console.error("Unexpected error:", errorAxios.response.data);
          // throw new Error(`Unexpected error - Status code: ${status}`);
          return errorAxios.response.data
      }
    } else if (errorAxios.request) {
      // No response received from the server
      throw new Error("No response from server - Check network connection.");
    } else {
      // Other errors (e.g., setting up the requestparams)
      throw new Error(`Request setup failed - Check configuration, ${errorAxios.message}`);
    }
  }
}