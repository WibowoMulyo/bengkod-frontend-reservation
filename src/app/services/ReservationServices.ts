import { reservationData2Map } from "@/lib/reservationData2Map";
import { RequestHttp } from "./core/Request";
import { GetCenterCoord } from "@/lib/Coordinate";

interface reservation{
  params?: any,
  data?: any,
}

export async function getDataAvalaible({params}:reservation) {
  return await RequestHttp({
    type: 'get',
    url: 'map',
    params: {...params}
  }).then(response => {
    if(response.status == 'success'){
      let result = GetCenterCoord(reservationData2Map({datas: response.data}))
      // console.log(result)
      return result
    }else{
      throw new Error("kesalahan saat fetching data")
    }
  })
}

export async function addReservation({data}:reservation){
  return await RequestHttp({
    type: 'post',
    url: 'reservation',
    datas: {...data}
  }).then(response => {
    if(response.status == 'success'){
      return response.data
    }else{
      throw new Error("Kesalahan saat menambah reservasi")
    }
  })
}

export async function getDetailTable({params} : reservation) {
  const result = await RequestHttp({
    type: 'get',
    url: 'detail-reservation-table',
    params: {...params}
  }).then(response => {
    if(response.status == 'success')
    {
      return response.data;
    }
    else{
      return response.status
    }
  })

  return result
}