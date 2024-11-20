'use server'
import axios, { AxiosError } from "axios";
// import Cookies from 'js-cookie'
import { cookies } from "next/headers";
interface requestparams {
  type: 'get' | 'post' | 'put' | 'delete',
  url?: string,
  datas?: { [key: string]: any },
  headers?: string,
  params?: { [key: string]: any },
}

async function getCookie(name='token'){
  return 
}

export async function RequestHttp({type = 'get', url = '', datas={}, headers = 'application/json', params={}}: requestparams): Promise<any> {
  
  // let authkey = Cookies.get('token') ? 'Bearer ' + Cookies.get('token') : ''
  const authkey = cookies().get('token')?.value ?? "";
  // return authkey
  try {
    switch (type) {
      case 'get':
        const a = await axios.get('http://127.0.0.1:8000/api/' + url, {
          headers: { 'Content-Type': headers, 'Authorization' : 'Bearer '+authkey},
          params: {
            ...params
          }
        })
        return a.data
      case 'put':
        const b = await axios.put('http://127.0.0.1:8000/api/' + url, {
          headers: { 'Content-Type': headers, 'Authorization' : authkey},
          ...datas,
          params: {
            id: ''
          }
        })
        return b.data
      case 'post':
        const c = await axios.post('http://127.0.0.1:8000/api/' + url, {
          headers: { 'Content-Type': headers, 'Authorization' : authkey},
          ...datas,
          params: {
            id: ''
          }
        })
        return c.data
      case 'delete':
        const d = await axios.put('http://127.0.0.1:8000/api/' + url, {
          headers: { 'Content-Type': headers, 'Authorization' : authkey},
          ...datas,
          params: {
            id: ''
          }
        })
        return d.data

      default:
        throw "Error requestparams method"
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
      console.error("No response from server:", errorAxios.message);
      throw new Error("No response from server - Check network connection.");
    } else {
      // Other errors (e.g., setting up the requestparams)
      console.error("Error setting up requestparams:", errorAxios.message);
      throw new Error("Request setup failed - Check configuration.");
    }
  }
}