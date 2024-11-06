export interface Reservation {
  id: number;
  status: 0 | 1;
  reservation_type: 0 | 1;
  reservation_date: string; // format 'YYYY-MM-DD'
  time_rents: string; // format 'HH:mm'
  table: string;
}