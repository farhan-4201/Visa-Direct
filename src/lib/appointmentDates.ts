export interface AvailableAppointmentDate {
  date: string;
  label: string;
}

function isWorkingDay(date: Date) {
  const day = date.getUTCDay();
  return day !== 0 && day !== 6;
}

function toDateKey(date: Date) {
  return date.toISOString().slice(0, 10);
}

export function getAvailableAppointmentDates(
  from: Date,
  count = 5,
  gapDays = 2
): AvailableAppointmentDate[] {
  const date = new Date(
    Date.UTC(from.getFullYear(), from.getMonth(), from.getDate() + 1)
  );
  const dates: AvailableAppointmentDate[] = [];
  let skippedWorkingDays = 0;

  while (dates.length < count) {
    if (isWorkingDay(date)) {
      if (skippedWorkingDays < gapDays) {
        skippedWorkingDays += 1;
      } else {
        dates.push({
          date: toDateKey(date),
          label: date.toLocaleDateString("en-GB", {
            weekday: "short",
            day: "numeric",
            month: "short",
            timeZone: "UTC",
          }),
        });
      }
    }
    date.setUTCDate(date.getUTCDate() + 1);
  }

  return dates;
}

export function isAvailableAppointmentDate(
  value: string | undefined,
  from: Date
) {
  if (!value || !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return false;
  }

  const parsedDate = new Date(`${value}T00:00:00.000Z`);
  if (
    Number.isNaN(parsedDate.getTime()) ||
    toDateKey(parsedDate) !== value
  ) {
    return false;
  }

  return (
    getAvailableAppointmentDates(from, 1)[0].date <= value &&
    isWorkingDay(parsedDate)
  );
}
