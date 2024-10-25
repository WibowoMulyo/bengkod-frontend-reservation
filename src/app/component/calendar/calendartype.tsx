interface Reservation {
  id: number;
  status: 0 | 1;
  reservation_type: 0 | 1;
  reservation_date: string; // format 'YYYY-MM-DD'
  time_rents: string; // format 'HH:mm'
}

// Mock reservation data
const reservations: Reservation[] = [
  { id: 1, status: 1, reservation_type: 0, reservation_date: '2024-10-07', time_rents: '10:00' },
];

function getDayOfWeek(dateString: string): number {
  const date = new Date(dateString);
  return date.getDay(); 
}

function getReservationsMap(reservations: Reservation[]) {
  const map: { [key: string]: Set<string> } = {};
  
  reservations.forEach(({ reservation_date, time_rents }) => {
    if (!map[reservation_date]) {
      map[reservation_date] = new Set();
    }
    map[reservation_date].add(time_rents);
  });

  return map; // { '2024-10-07': Set{'10:00', ...}, ...}
}

export { getDayOfWeek, getReservationsMap };