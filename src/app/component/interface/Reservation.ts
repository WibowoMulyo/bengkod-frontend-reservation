export interface Reservation {
  code?: string;
  date: string;
  type: string,
  email: string[]; // format 'YYYY-MM-DD'
  total_person?: number,
  time_slot?: string; // format 'HH:mm'
  reason?: string,
  table_id?: string;
}