interface reservationdata{
  datas: Array<any>,
}
import { mapitem } from "@/app/component/interface/Map"
import { mapdata } from "@/data/mapdata"

export const reservationData2Map = ({datas}: reservationdata) => {
  let new_dict = datas.map((data) =>{
    let content = mapdata[data.table_number]
    content['disabled'] = !data.is_available
    if(content){
      return content
    }
    return null
  })
  
  return new_dict
}