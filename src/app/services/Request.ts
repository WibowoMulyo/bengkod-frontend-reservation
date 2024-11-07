import axios, { AxiosError } from "axios";

interface requestparams {
  type: 'get' | 'post' | 'put' | 'delete',
  url?: string,
  datas?: { [key: string]: any },
  headers?: string,
  params?: { [key: string]: any },
}

export async function RequestHttp({type = 'get', url = '', datas={}, headers = 'application/json', params={}}: requestparams): Promise<any> {
  const bodydata = new FormData()
  if (datas) {
    Object.keys(datas).map((key) => {
      bodydata.append(key, datas[key])
    })
    console.log(bodydata)
  }

  try {
    switch (type) {
      case 'get':
        const a = await axios.get(url, {
          headers: { 'Content-Type': headers },
          params: {
            ...params
          }
        })
        return a.data
      case 'put':
        const b = await axios.put(url, {
          headers: { 'Content-Type': headers },
          ...datas,
          params: {
            id: ''
          }
        })
        return b.data
      case 'post':
        const c = await axios.post(url, {
          headers: { 'Content-Type': headers },
          ...datas,
          params: {
            id: ''
          }
        })
        return c.data
      case 'delete':
        const d = await axios.put(url, {
          headers: { 'Content-Type': headers },
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
          console.error("Bad Request:", errorAxios.response.data);
          throw new Error("Bad requestparams - Check parameters and try again.");
        case 401:
          console.error("Unauthorized:", errorAxios.response.data);
          throw new Error("Unauthorized - Please check your credentials.");
        case 404:
          console.error("Not Found:", errorAxios.response.data);
          throw new Error("Resource not found - Verify the URL.");
        case 500:
          console.error("Internal Server Error:", errorAxios.response.data);
          throw new Error("Server error - Try again later.");
        default:
          console.error("Unexpected error:", errorAxios.response.data);
          throw new Error(`Unexpected error - Status code: ${status}`);
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
export function calculateArea(width: number, height: number): number {
  return width * height;
}