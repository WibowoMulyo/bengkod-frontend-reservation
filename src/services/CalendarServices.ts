import { RequestHttp } from "./core/Request"
import { ApiHandler } from "@/lib/apiHandler";
export async function getDataCalendar(...params : any) {
  let data = await RequestHttp({ 
    type: 'get',
    url: `table`,
    params: {...params} })
  return data
}