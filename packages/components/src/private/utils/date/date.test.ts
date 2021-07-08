import * as DateUtils from '.';

describe('Date utils', () => {
  beforeAll(() => {
    // eslint-disable-next-line no-console
    console.warn = jest.fn();
  });

  it('should changeDay add days', () => {
    const baseDate = new Date('2020-06-10T00:00:00.000Z');

    expect(DateUtils.changeDay(baseDate, 1)).toEqual(
      new Date('2020-06-11T00:00:00.000Z')
    );
    expect(DateUtils.changeDay(baseDate, 10)).toEqual(
      new Date('2020-06-20T00:00:00.000Z')
    );
    expect(DateUtils.changeDay(baseDate, 30)).toEqual(
      new Date('2020-07-10T00:00:00.000Z')
    );
  });

  it('should changeDay subtract days', () => {
    const baseDate = new Date('2020-06-20T00:00:00.000Z');

    expect(DateUtils.changeDay(baseDate, -1)).toEqual(
      new Date('2020-06-19T00:00:00.000Z')
    );
    expect(DateUtils.changeDay(baseDate, -10)).toEqual(
      new Date('2020-06-10T00:00:00.000Z')
    );
    expect(DateUtils.changeDay(baseDate, -30)).toEqual(
      new Date('2020-05-21T00:00:00.000Z')
    );
  });

  it('should changeMonth add months', () => {
    const baseDate = new Date('2020-06-10T00:00:00.000Z');

    expect(DateUtils.changeMonth(baseDate, 1)).toEqual(
      new Date('2020-07-10T00:00:00.000Z')
    );
    expect(DateUtils.changeMonth(baseDate, 10)).toEqual(
      new Date('2021-04-10T00:00:00.000Z')
    );
    expect(
      DateUtils.changeMonth(new Date('2020-06-31T00:00:00.000Z'), 1)
    ).toEqual(new Date('2020-08-01T00:00:00.000Z'));
  });

  it('should changeMonth subtract months', () => {
    const baseDate = new Date('2020-06-20T00:00:00.000Z');

    expect(DateUtils.changeMonth(baseDate, -1)).toEqual(
      new Date('2020-05-20T00:00:00.000Z')
    );
    expect(DateUtils.changeMonth(baseDate, -10)).toEqual(
      new Date('2019-08-20T00:00:00.000Z')
    );
    expect(
      DateUtils.changeMonth(new Date('2020-07-01T00:00:00.000Z'), -1)
    ).toEqual(new Date('2020-06-01T00:00:00.000Z'));
  });

  it('should changeYear add years', () => {
    const baseDate = new Date('2020-06-10T00:00:00.000Z');

    expect(DateUtils.changeYear(baseDate, 1)).toEqual(
      new Date('2021-06-10T00:00:00.000Z')
    );
    expect(DateUtils.changeYear(baseDate, 10)).toEqual(
      new Date('2030-06-10T00:00:00.000Z')
    );
    expect(
      DateUtils.changeYear(new Date('2020-12-31T00:00:00.000Z'), 1)
    ).toEqual(new Date('2021-12-31T00:00:00.000Z'));
  });

  it('should changeYear subtract years', () => {
    const baseDate = new Date('2020-06-20T00:00:00.000Z');

    expect(DateUtils.changeYear(baseDate, -1)).toEqual(
      new Date('2019-06-20T00:00:00.000Z')
    );
    expect(DateUtils.changeYear(baseDate, -10)).toEqual(
      new Date('2010-06-20T00:00:00.000Z')
    );
    expect(
      DateUtils.changeYear(new Date('2020-01-01T00:00:00.000Z'), -1)
    ).toEqual(new Date('2019-01-01T00:00:00.000Z'));
  });

  it('should isSameDay return true if same day', () => {
    expect(
      DateUtils.isSameDay(
        new Date('2020-11-20T00:00:00.000Z'),
        new Date('2020-11-20T00:00:00.000Z')
      )
    ).toBe(true);
  });

  it('should isSameDay return false if not same day', () => {
    expect(
      DateUtils.isSameDay(
        new Date('2020-11-20T00:00:00.000Z'),
        new Date('2021-04-04T00:00:00.000Z')
      )
    ).toBe(false);
  });

  it('should isDateInsideRange return true if date is between range', () => {
    const range = {
      start: new Date('2020-11-10T12:00:00.000Z'),
      end: new Date('2020-11-20T12:00:00.000Z')
    };

    expect(
      DateUtils.isDateInsideRange(new Date('2020-11-15T00:00:00.000Z'), range)
    ).toBe(true);
    expect(
      DateUtils.isDateInsideRange(new Date('2020-11-10T16:00:00.000Z'), range)
    ).toBe(true);
    expect(
      DateUtils.isDateInsideRange(new Date('2020-11-20T08:00:00.000Z'), range)
    ).toBe(true);
  });

  it('should isDateInsideRange return false if date is not between range', () => {
    const range = {
      start: new Date('2020-11-10T12:00:00.000Z'),
      end: new Date('2020-11-20T12:00:00.000Z')
    };

    expect(
      DateUtils.isDateInsideRange(new Date('2020-11-05T00:00:00.000Z'), range)
    ).toBe(false);
    expect(
      DateUtils.isDateInsideRange(new Date('2020-11-25T00:00:00.000Z'), range)
    ).toBe(false);
    expect(
      DateUtils.isDateInsideRange(new Date('2020-11-10T08:00:00.000Z'), range)
    ).toBe(false);
    expect(
      DateUtils.isDateInsideRange(new Date('2020-11-20T16:00:00.000Z'), range)
    ).toBe(false);
  });

  it('should endOfMonth convert a date to end of the month', () => {
    expect(
      DateUtils.endOfMonth(new Date('2020-11-20T14:32:12.345Z')).toISOString()
    ).toEqual('2020-11-30T23:59:59.999Z');
    expect(
      DateUtils.endOfMonth(new Date('2020-03-03T06:45:23.100Z')).toISOString()
    ).toEqual('2020-03-31T23:59:59.999Z');
  });

  it('should startOfMonth convert a date to beginning of the month', () => {
    expect(
      DateUtils.startOfMonth(new Date('2020-11-20T14:32:12.345Z')).toISOString()
    ).toEqual('2020-11-01T00:00:00.000Z');
  });

  it('should startOfYear convert a date to beginning of the year', () => {
    expect(
      DateUtils.startOfYear(new Date('2020-11-20T14:32:12.345Z')).toISOString()
    ).toEqual('2020-01-01T00:00:00.000Z');
  });

  it('should update date range with a date before', () => {
    const startDate = new Date('2020-06-10T00:00:00.000Z');
    const endDate = new Date('2020-06-20T00:00:00.000Z');
    const newDate = new Date('2020-06-05T00:00:00.000Z');

    expect(
      DateUtils.updateDateRange(newDate, { start: startDate, end: endDate })
    ).toEqual({ start: newDate, end: endDate });
  });

  it('should update date range with a date after', () => {
    const startDate = new Date('2020-06-10T00:00:00.000Z');
    const endDate = new Date('2020-06-20T00:00:00.000Z');
    const newDate = new Date('2020-06-25T00:00:00.000Z');

    expect(
      DateUtils.updateDateRange(newDate, { start: startDate, end: endDate })
    ).toEqual({ start: startDate, end: newDate });
  });

  it('should update date range with a date in the middle', () => {
    const startDate = new Date('2020-06-10T00:00:00.000Z');
    const endDate = new Date('2020-06-20T00:00:00.000Z');
    const newDate = new Date('2020-06-15T00:00:00.000Z');

    expect(
      DateUtils.updateDateRange(newDate, { start: startDate, end: endDate })
    ).toEqual({ start: startDate, end: newDate });
  });

  it('should update date range with a date equal to start', () => {
    const startDate = new Date('2020-06-10T00:00:00.000Z');
    const endDate = new Date('2020-06-20T00:00:00.000Z');
    const newDate = new Date('2020-06-10T00:00:00.000Z');

    expect(
      DateUtils.updateDateRange(newDate, { start: startDate, end: endDate })
    ).toEqual({ start: newDate, end: newDate });
  });

  it('should update date range with a date equal to end', () => {
    const startDate = new Date('2020-06-10T00:00:00.000Z');
    const endDate = new Date('2020-06-20T00:00:00.000Z');
    const newDate = new Date('2020-06-20T00:00:00.000Z');

    expect(
      DateUtils.updateDateRange(newDate, { start: startDate, end: endDate })
    ).toEqual({ start: newDate, end: newDate });
  });

  it('should return correct correct locale months', () => {
    expect(DateUtils.getLocaleMonths('ca-ES', 'long')[0]).toEqual('gener');
  });

  it('should return correct correct default locale months', () => {
    expect(DateUtils.getLocaleMonths()[0]).toEqual('January');
  });

  it('should return correct correct locale week days', () => {
    expect(DateUtils.getLocaleWeekdays('ca-ES', 'long')[0]).toEqual('dilluns');
  });

  it('should return correct correct default locale week days', () => {
    expect(DateUtils.getLocaleWeekdays()[0]).toEqual('Monday');
  });

  it('should return default locale if wrong locale is passed', () => {
    expect(DateUtils.getLocaleWeekdays('EN_US')[0]).toEqual('Monday');
  });

  it('should return locales if getCanonicalLocales is not implemented in browser', () => {
    const { getCanonicalLocales } = window.Intl as any;
    (window.Intl as any).getCanonicalLocales = undefined;
    expect(DateUtils.getLocaleWeekdays('ca-ES')[0]).toEqual('dilluns');
    (window.Intl as any).getCanonicalLocales = getCanonicalLocales;
  });
});
