import { Reservation } from "@/app/component/interface/Reservation";

export const reservations: Reservation[] = [
  { id: 1, status: 1, reservation_type: 0, reservation_date: '2024-10-24', time_rents: '13:01-15:00', table: '1' },
  { id: 1, status: 1, reservation_type: 0, reservation_date: '2024-10-24', time_rents: '10:01-12:00', table: '1' },
  { id: 1, status: 1, reservation_type: 0, reservation_date: '2024-10-24', time_rents: '08:00-10:00', table: '1' },
  { id: 2, status: 0, reservation_type: 1, reservation_date: '2024-10-24', time_rents: '10:01-12:00', table: '2' },
];


export const reservations2: Reservation[] = [
  { id: 1, status: 1, reservation_type: 0, reservation_date: '2024-10-29', time_rents: '13:01-15:00', table: 'Table 01' },
  { id: 2, status: 0, reservation_type: 1, reservation_date: '2024-10-28', time_rents: '10:01-12:00', table: 'Table 01' },
  { id: 3, status: 0, reservation_type: 1, reservation_date: '2024-10-31', time_rents: '15:01-17:00', table: 'Table 04' },
];