import { RequestHttp } from "./core/Request";

interface reservation{
  params?: any,
  data?: any,
}

export async function getDataAvalaible({params}:reservation) {
  const result = await RequestHttp({
    type: 'get',
    url: '<ReservationLink>',
    params: {...params}
  })

  return result
}

export async function submitForm({data} : any) {
  const result = await RequestHttp({
    type: 'post',
    url: '<PostReservationLink>',
    datas: {...data}
  })
}