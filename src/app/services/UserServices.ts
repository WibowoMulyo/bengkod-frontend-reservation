'use server'

import { RequestHttp } from "./core/Request";

interface user{
  user_id?:string,
  data?:any
}

export async function getDataUser() {
  const result = await RequestHttp({
    type: "get",
    url: "user",
  });
  return result;
}

export async function updateDataUser({data} : user) {
  const result = await RequestHttp({
    type:'put',
    url: 'user/update',
    datas: {...data}
  })

  return result
}