import { RequestHttp } from "./core/Request"

export async function getDataCalendar(id=1) {
  const getData = await RequestHttp({
    type: 'get',
    url: `calendar`,
    params: {table_id : id}
  })
  return getData
}