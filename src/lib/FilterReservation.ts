import { Reservation } from "@/components/interface/Reservation";

export const filterData = (reservationMap: Array<Reservation>, key: string ) => {
  if (!reservationMap) return [];
  if(!key) return [];

  return reservationMap.filter((x) =>
    x.table_id.includes(key)
  )
}