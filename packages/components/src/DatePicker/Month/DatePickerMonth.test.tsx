import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import theme from '@sergiogc9/react-ui-theme';

import { withTheme } from 'components/private/utils/tests';
import DatePickerMonth from '.';
import { DatePickerMonthProps } from './types';

const datePickerMonthTestId = 'AwesomeDatePicker';

const mockOnMonthClick = jest.fn();
const renderDatePickerMonth = (props?: Partial<DatePickerMonthProps>) =>
  render(
    withTheme(
      <DatePickerMonth
        data-testid={datePickerMonthTestId}
        onMonthClick={mockOnMonthClick}
        {...props}
      />
    )
  );

describe('DatePickerMonth component', () => {
  afterEach(cleanup);

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should render months by default', () => {
    renderDatePickerMonth();

    expect(screen.getByText('Jan')).toBeInTheDocument();
  });

  it('should render calendar in custom locale', () => {
    renderDatePickerMonth({ locale: 'ca-ES' });

    expect(screen.getByText('gen.')).toBeInTheDocument();
  });

  it('should render calendar with default visible year', () => {
    renderDatePickerMonth({ defaultVisibleYear: new Date(2010, 4, 3) });

    expect(screen.getByText('2010')).toBeInTheDocument();
  });

  it('should not render any month as selected', () => {
    const { container } = renderDatePickerMonth();

    expect(container.querySelector('.month-selected')).toBeNull();
  });

  it('should render day as selected', () => {
    const { container } = renderDatePickerMonth({
      date: new Date(2021, 4, 5),
      defaultVisibleYear: new Date(2021, 4, 3)
    });

    expect(container.querySelector('.month-selected')).toBeInTheDocument();
  });

  it('should not render any day as selected in range', () => {
    const { container } = renderDatePickerMonth({ isRange: true });

    expect(container.querySelector('.month-selected')).toBeNull();
  });

  it('should render day as selected in range', () => {
    const { container } = renderDatePickerMonth({
      dateRange: { start: new Date(2021, 4, 5), end: new Date(2021, 4, 20) },
      defaultVisibleYear: new Date(2021, 4, 3),
      isRange: true
    });

    expect(container.querySelector('.month-selected')).toBeInTheDocument();
  });

  it('should change to previous year', () => {
    renderDatePickerMonth({ defaultVisibleYear: new Date(2021, 4, 3) });

    userEvent.click(screen.getByTestId('datePickerMonthPreviousYearIcon'));

    expect(screen.getByText('2020')).toBeInTheDocument();
  });

  it('should change to next year', () => {
    renderDatePickerMonth({ defaultVisibleYear: new Date(2021, 4, 3) });

    userEvent.click(screen.getByTestId('datePickerMonthNextYearIcon'));

    expect(screen.getByText('2022')).toBeInTheDocument();
  });

  it('should not change to previous month if previous than minDate', () => {
    renderDatePickerMonth({
      defaultVisibleYear: new Date(2021, 4, 3),
      minDate: new Date(2021, 4, 1)
    });

    userEvent.click(screen.getByTestId('datePickerMonthPreviousYearIcon'));

    expect(screen.getByText('2021')).toBeInTheDocument();
  });

  it('should not change to next month if after than maxDate', () => {
    renderDatePickerMonth({
      defaultVisibleYear: new Date(2021, 4, 3),
      maxDate: new Date(2021, 4, 20)
    });

    userEvent.click(screen.getByTestId('datePickerMonthNextYearIcon'));

    expect(screen.getByText('2021')).toBeInTheDocument();
  });

  it('should show range start and end elements', () => {
    renderDatePickerMonth({
      defaultVisibleYear: new Date(2021, 4, 3),
      isRange: true,
      dateRange: { start: new Date(2021, 2, 10), end: new Date(2021, 10, 20) }
    });

    expect(screen.getByText('Mar')).toHaveStyle(`
      background-color: ${theme.colors.primary['700']};
    `);
    expect(screen.getByText('May')).toHaveStyle(`
      background-color: ${theme.colors.primary['100']};
    `);
    expect(screen.getByText('Nov')).toHaveStyle(`
      background-color: ${theme.colors.primary['700']};
    `);
  });

  it('should call onMonthClick handler', () => {
    renderDatePickerMonth({
      defaultVisibleYear: new Date(2021, 4, 3)
    });

    userEvent.click(screen.getByText('Nov'));

    expect(mockOnMonthClick).toHaveBeenCalledWith(
      new Date('2021-11-01T00:00:00.000Z')
    );
  });

  it('should not call onMonthClick handler if day is disabled', () => {
    renderDatePickerMonth({
      defaultVisibleYear: new Date(2021, 4, 3),
      maxDate: new Date(2021, 8, 20)
    });

    userEvent.click(screen.getByText('Nov'));

    expect(mockOnMonthClick).not.toHaveBeenCalled();
  });

  it('should not call onMonthClick handler if not provided', () => {
    renderDatePickerMonth({
      defaultVisibleYear: new Date(2021, 4, 3),
      onMonthClick: undefined
    });

    userEvent.click(screen.getByText('Nov'));

    expect(mockOnMonthClick).not.toHaveBeenCalled();
  });
});
