import { Reservation } from "@/components/interface/Reservation";

export const reservations: any[] = [
  { code: "RSV005", reservation_date: '2024-11-14', time_rents: '08:00-10:00', table_id: 1 },
  { code: "RSV006", reservation_date: '2024-11-15', time_rents: '10:01-12:00', table_id: 1 },
  { code: "RSV007", reservation_date: '2024-11-16', time_rents: '13:01-15:00', table_id: 2 },
  { code: "RSV008", reservation_date: '2024-11-17', time_rents: '15:01-17:00', table_id: 1 },
];


export const reservations2: any[] = [
  { id: 1, status: 1, reservation_type: 0, reservation_date: '2024-11-04', time_rents: '13:01-15:00', table: 'Table 01' },
  { id: 2, status: 0, reservation_type: 1, reservation_date: '2024-11-04', time_rents: '10:01-12:00', table: 'Table 01' },
  { id: 3, status: 0, reservation_type: 1, reservation_date: '2024-11-05', time_rents: '15:01-17:00', table: 'Table 04' },
];