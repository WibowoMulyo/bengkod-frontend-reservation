import { RequestHttp } from "./core/Request";

export async function getDataHistory({params}:any) {
  const data = await RequestHttp({
    type:'get',
    url:'<HistoryLink>',
    params : {...params}
  })

  return data
}