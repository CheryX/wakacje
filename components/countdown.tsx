import { countWorkdays, Weekday } from "@/utils/date";
import { getCurrectSchoolYear, getHolidays } from "@/utils/official";

const allWeekdays: Weekday[] = [0, 1, 2, 3, 4];

export default function Countdown({
  until,
  weekdays = allWeekdays,
}: {
  until: Date;
  weekdays?: Weekday[];
}) {
  const currentSchoolYear = getCurrectSchoolYear();
  const holidays = getHolidays(currentSchoolYear);

  const days = countWorkdays(holidays, weekdays, until);
  return days;
}
