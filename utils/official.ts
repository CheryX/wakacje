import Holidays from "date-holidays";
import { getDatesBetween } from "./date";

export function getSchoolYearEndDate(year: number): Date {
  // First Friday **after** June 20th

  const june20th = new Date(year, 5, 21);
  const dayOfWeek = june20th.getDay();

  const daysToNextFriday = (dayOfWeek <= 5) ? (5 - dayOfWeek) : (12 - dayOfWeek);

  june20th.setDate(june20th.getDate() + daysToNextFriday);

  return june20th;
}

export function getSchoolYearGraduationEndDate(year: number): Date {
  // Last Friday of April

  let lastDayOfApril = new Date(year, 3, 30);
  let dayOfWeek = lastDayOfApril.getDay();
  let lastFriday = 30 - ((dayOfWeek + 2) % 7);

  return new Date(year, 3, lastFriday);

}

type DateTypes = "end" | "grad_end" | "christmas" | "final_grades" | "final_grad_grades" | "start";

export default function getAllDates(year: number): Record<DateTypes, Date> {
  return {
    end: getSchoolYearEndDate(year),
    grad_end: getSchoolYearGraduationEndDate(year),
    christmas: new Date(year - 1, 11, 23),
    final_grades: new Date(year, 5, 8), // Approximation, based on previous years
    final_grad_grades: new Date(year, 3, 9), // Approximation
    start: new Date(year - 1, 8, 1)
  };
}

export function getCurrectSchoolYear(): number {
  let currentSchoolYear = new Date().getFullYear();
  currentSchoolYear += new Date().getMonth() >= 8 ? 1 : 0; // The new school year will display on September 1st

  return currentSchoolYear;
}

export function getHolidays(year: number): Date[] {

  let officialHolidays = new Holidays('PL').getHolidays(year - 1).map(e => new Date(e.date));
  let nextYearOfficialHolidays = new Holidays('PL').getHolidays(year).map(e => new Date(e.date));

  return [
    ...officialHolidays,
    ...nextYearOfficialHolidays,
    ...getDatesBetween(
      new Date(year - 1, 11, 23),
      new Date(year - 1, 11, 30)
    ),
    ...getDatesBetween(
      getSchoolYearEndDate(year),
      new Date(year, 7, 31)
    ),
    ...getDatesBetween(
      new Date(year, 1, 3),
      new Date(year, 1, 16)
    ) // 2 weeks in February for winter break (it will always result in -10 days)
  ].sort((a, b) => a.getTime() - b.getTime())

}