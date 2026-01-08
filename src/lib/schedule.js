export const EVENT_SCHEDULE = [
  {
    label: 'FPG 1',
    city: 'São Paulo',
    startDay: 6,
    endDay: 7,
    monthName: 'fevereiro',
    monthIndex: 1, // February
  },
  {
    label: 'FPG 2',
    city: 'Brasília',
    startDay: 20,
    endDay: 21,
    monthName: 'março',
    monthIndex: 2, // March
  },
  {
    label: 'FPG 3',
    city: 'Goiânia',
    startDay: 25,
    endDay: 26,
    monthName: 'abril',
    monthIndex: 3, // April
  },
  {
    label: 'FPG 4',
    city: 'São Paulo',
    startDay: 2,
    endDay: 3,
    monthName: 'maio',
    monthIndex: 4, // May
  },
  {
    label: 'FPG 5',
    city: 'Goiânia',
    startDay: 27,
    endDay: 28,
    monthName: 'junho',
    monthIndex: 5, // June
  },
];

const buildScheduleForYear = (year) =>
  EVENT_SCHEDULE.map((event) => ({
    ...event,
    startDate: new Date(year, event.monthIndex, event.startDay, 0, 0, 0),
    endDate: new Date(year, event.monthIndex, event.endDay, 23, 59, 59),
  }));

export function getUpcomingEvent(referenceDate = new Date()) {
  const now = referenceDate;
  const currentYear = now.getFullYear();

  const upcomingThisYear = buildScheduleForYear(currentYear).find(
    (event) => event.startDate >= now
  );

  if (upcomingThisYear) {
    return upcomingThisYear;
  }

  const [firstNextYear] = buildScheduleForYear(currentYear + 1);
  return firstNextYear;
}

export function formatEventDateRange(event) {
  if (!event) return '';
  return `${event.startDay} e ${event.endDay} de ${event.monthName}`;
}
