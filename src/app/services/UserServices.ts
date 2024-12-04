'use server'

import { RequestHttp } from "./core/Request";
import { ApiHandler } from "@/lib/apiHandler";

interface user{
  user_id?:string,
  data:any
}

export async function getDataUser() {
  const result = await ApiHandler({
    requestfunc: () => RequestHttp({ type: "get", url: "user" }),
  })
  return result;
}

export async function updateDataUser({data, user_id} : user) {
  const result = await ApiHandler({
    requestfunc: () => RequestHttp({ type: "patch", url:`user/${user_id}`, datas: {...data} }),
  })
  return result;
}