import { DateRange } from './types';

const changeDay = (date: Date, days: number) => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days);
  return newDate;
};

const changeMonth = (date: Date, months: number) => {
  const newDate = new Date(date);
  newDate.setMonth(newDate.getMonth() + months);
  return newDate;
};

const changeYear = (date: Date, years: number) => {
  const newDate = new Date(date);
  newDate.setFullYear(newDate.getFullYear() + years);
  return newDate;
};

const endOfMonth = (date: Date) => {
  const newDate = new Date(date);
  newDate.setMonth(newDate.getMonth() + 1);
  newDate.setDate(-1);
  newDate.setDate(newDate.getDate() + 1);
  newDate.setHours(23);
  newDate.setMinutes(59);
  newDate.setSeconds(59);
  newDate.setMilliseconds(999);
  return newDate;
};

const isSameDay = (date: Date, date2: Date) => {
  return (
    date.getDate() === date2.getDate() &&
    date.getMonth() === date2.getMonth() &&
    date.getFullYear() === date2.getFullYear()
  );
};

const isDateInsideRange = (date: Date, range: DateRange) => {
  return date >= range.start && date <= range.end;
};

const startOfMonth = (date: Date) => {
  const newDate = new Date(date);
  newDate.setDate(1);
  newDate.setHours(0);
  newDate.setMinutes(0);
  newDate.setSeconds(0);
  newDate.setMilliseconds(0);
  return newDate;
};

const startOfYear = (date: Date) => {
  const newDate = startOfMonth(date);
  newDate.setMonth(0);
  return newDate;
};

const updateDateRange = (newDate: Date, range: DateRange): DateRange => {
  if (isSameDay(newDate, range.start) || isSameDay(newDate, range.end))
    return { start: newDate, end: newDate };
  if (newDate < range.start) return { start: newDate, end: range.end };
  return { start: range.start, end: newDate };
};

const getCanonicalLocales = (locales: string | string[]) => {
  /**
   * Casting to any needed because TS type does not include getCanonicalLocales in Intl types
   */
  const Intl = window.Intl as any;
  if (Intl.getCanonicalLocales) {
    try {
      return Intl.getCanonicalLocales(locales);
    } catch (e) {
      return Intl.getCanonicalLocales('en-US');
    }
  }

  // eslint-disable-next-line no-console
  console.warn('Intl.getCanonicalLocales not supported by current browser');
  return locales;
};

const getLocaleMonths = (
  localeName = 'en-US',
  monthFormat: Intl.DateTimeFormatOptions['month'] = 'long'
) => {
  const { format } = new Intl.DateTimeFormat(getCanonicalLocales(localeName), {
    month: monthFormat
  });
  return [...Array(12).keys()].map((m) => format(new Date(Date.UTC(2021, m))));
};

const getLocaleWeekdays = (
  localeName = 'en-US',
  weekdayFormat: Intl.DateTimeFormatOptions['weekday'] = 'long'
) => {
  const { format } = new Intl.DateTimeFormat(getCanonicalLocales(localeName), {
    weekday: weekdayFormat
  });
  return [...Array(7).keys()].map((d) =>
    format(new Date(Date.UTC(1, 1, d + 4)))
  );
};

export {
  changeDay,
  changeMonth,
  changeYear,
  endOfMonth,
  getLocaleMonths,
  getLocaleWeekdays,
  isDateInsideRange,
  isSameDay,
  startOfMonth,
  startOfYear,
  updateDateRange
};
