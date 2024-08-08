export enum Weekday {
  MONDAY = 0,
  TUESDAY = 1,
  WEDNESDAY = 2,
  THURSDAY = 3,
  FRIDAY = 4,
}

function countWorkdays(holidays: Date[], weekdays: Weekday[], endDate: Date) {

  let currentDate = new Date();
  let count = 0;

  while (currentDate < endDate) {

    const currentDayOfWeek = currentDate.getDay();

    // In case of multiple occurences per day
    const isWeekday = weekdays.filter((element) => element === currentDayOfWeek).length;

    const isHoliday = holidays.some(holiday => {
      return holiday.getMonth() === currentDate.getMonth() &&
        holiday.getDate() === currentDate.getDate();
    });

    if (isWeekday && !isHoliday) {
      count += isWeekday;
    }

    currentDate.setDate(currentDate.getDate() + 1);

  }

  return count;

}

function getDatesBetween(startDate: Date, endDate: Date) {

  let dates = [];
  let currentDate = new Date(startDate);

  while (currentDate <= new Date(endDate)) {
    dates.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dates;

}

function formatDate(date: Date): string {
  const monthsInRomanNumerals = [
    "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"
  ];

  const day = date.getDate().toString().padStart(2, "0");
  const monthInRomanNumerals = monthsInRomanNumerals[date.getMonth() + 1];

  return `${day} ${monthInRomanNumerals}`;
}

export { getDatesBetween, countWorkdays, formatDate }