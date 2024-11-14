export interface Reservation {
  code: string;
  // status: 0 | 1;
  // reservation_type: 0 | 1;
  date: string; // format 'YYYY-MM-DD'
  time_slot: string; // format 'HH:mm'
  table_id: string;
}