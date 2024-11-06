import { Reservation } from "@/app/component/interface/Reservation";

export const filterData = (reservationMap: Array<Reservation>, key: string ) => {
  if (!reservationMap) return [];
  if(!key) return [];

  return reservationMap.filter((x) =>
    x.table.includes(key)
  )
}