// interface Reservation {
//   id: number;
//   status: 0 | 1;
//   reservation_type: 0 | 1;
//   date: string; 
//   time_slot: string;
// }

import { Reservation } from "@/components/interface/Reservation";

function getDayOfWeek(dateString: string): number {
  const date = new Date(dateString);
  return date.getDay(); 
}

function getReservationsDateMap(reservations: Reservation[]) {
  const map: { [key: string]: Set<string> } = {};
  
  reservations.forEach(({ date, time_slot }) => {
    // column_key
    if (!map[date]) {
      map[date] = new Set();
    }
    map[date].add(time_slot);
  });

  return map; // { '2024-10-07': Set{'10:00', ...}, ...}
}

function getReservationHourMap(reservations: Reservation[]){
  const map: { [key: string]: Set<string> } = {};
  
  reservations.forEach(({ date, time_slot }) => {
    if (!map[time_slot]) {
      map[time_slot] = new Set();
    }
    map[time_slot].add('');
  });

  return map;
}

export { getDayOfWeek, getReservationsDateMap, getReservationHourMap };