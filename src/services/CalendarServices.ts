import { RequestHttp } from "./core/Request"
import { ApiHandler } from "@/lib/apiHandler";
export async function getDataCalendar(id=1) {
  let data = await ApiHandler({
    requestfunc: () => RequestHttp({ 
      type: 'get',
      url: `calendar`,
      params: {table_id : id} }),
  })
  return data
}