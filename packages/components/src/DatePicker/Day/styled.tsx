import styled, { css } from 'styled-components';
import ssCss from '@styled-system/css';

import Box from 'components/Box';
import { DatePickerDayProps } from './types';

/**
 * Default styles based on library styles:
 * https://github.com/gpbl/react-day-picker/blob/v7/src/style.css
 */
const dayPickerLibraryStyles = css`
  /* DayPicker styles */

  .DayPicker {
    display: inline-block;
  }

  .DayPicker-wrapper {
    position: relative;
    flex-direction: row;
    padding-bottom: 1em;
    user-select: none;
  }

  .DayPicker-Months {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .DayPicker-Month {
    display: table;
    border-spacing: 0;
    border-collapse: collapse;
    user-select: none;
  }

  .DayPicker-Weekdays {
    display: table-header-group;
    margin-top: 1em;
  }

  .DayPicker-WeekdaysRow {
    display: table-row;
  }

  .DayPicker-Weekday {
    display: table-cell;
    color: #8b9898;
    text-align: center;
  }

  .DayPicker-Weekday abbr[title] {
    border-bottom: none;
    text-decoration: none;
  }

  .DayPicker-Body {
    display: table-row-group;
  }

  .DayPicker-Week {
    display: table-row;
  }

  .DayPicker-Day {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    cursor: pointer;
    transition-property: background-color border-radius;
    transition-timing-function: ease-in;
    transition-duration: 0.2s;
  }
`;

const StyledDatePickerDay: React.FC<DatePickerDayProps> = styled(
  Box
)<DatePickerDayProps>`
  ${dayPickerLibraryStyles}

  .DayPicker-wrapper {
    outline: none;
  }

  /* Day modifiers */

  .DayPicker-Weekday {
    ${(props) =>
      ssCss({
        fontSize: props.theme.components.datePicker.fontSize,
        width: props.theme.components.datePicker.day.size
      })}
  }

  .DayPicker-Day {
    ${(props) =>
      ssCss({
        backgroundClip: 'content-box',
        borderRadius: props.theme.components.datePicker.day.borderRadius,
        color: props.theme.components.datePicker.colors.text,
        fontSize: props.theme.components.datePicker.fontSize,
        lineHeight: `${props.theme.components.datePicker.day.size - 4}px`, // This fixes a bug in iOS devices
        height: props.theme.components.datePicker.day.size,
        outline: 'none',
        padding: '2px',
        width: props.theme.components.datePicker.day.size
      })}

    &:not(.DayPicker-Day--selected,.DayPicker-Day--disabled,.DayPicker-Day--outside):hover,
    &:not(.DayPicker-Day--selected,.DayPicker-Day--disabled,.DayPicker-Day--outside):focus {
      ${(props) =>
        ssCss({
          bg: props.theme.components.datePicker.colors.hover
        })}
    }
  }

  .DayPicker-Day--today {
    ${(props) =>
      ssCss({
        bg: props.theme.components.datePicker.colors.todayBackground,
        color: props.theme.components.datePicker.colors.today,
        fontWeight: props.theme.fontWeights.bold
      })}
  }

  .DayPicker-Day--selected {
    ${(props) =>
      props.isRange
        ? ssCss({
            borderRadius: '1px',
            bg: props.theme.components.datePicker.colors.hover,
            paddingX: 0
          })
        : ssCss({
            bg: props.theme.components.datePicker.colors.selected,
            color: 'neutral.0',
            fontWeight: props.theme.fontWeights.bold
          })}
  }

  .DayPicker-Day--start,
  .DayPicker-Day--end {
    ${(props) =>
      ssCss({
        bg: props.theme.components.datePicker.colors.selected,
        color: 'neutral.0',
        fontWeight: props.theme.fontWeights.bold
      })}
  }

  .DayPicker-Day--start {
    ${(props) =>
      ssCss({
        borderBottomLeftRadius:
          props.theme.components.datePicker.day.borderRadius,
        borderTopLeftRadius: props.theme.components.datePicker.day.borderRadius,
        paddingLeft: '2px'
      })}
  }

  .DayPicker-Day--end {
    ${(props) =>
      ssCss({
        borderBottomRightRadius:
          props.theme.components.datePicker.day.borderRadius,
        borderTopRightRadius:
          props.theme.components.datePicker.day.borderRadius,
        paddingRight: '2px'
      })}
  }

  .DayPicker-Day--disabled {
    ${(props) =>
      ssCss({
        color: props.theme.components.datePicker.colors.disabled,
        cursor: 'default'
      })}
  }

  .DayPicker-Day--outside {
    opacity: 0;
    cursor: default;
  }
`;

StyledDatePickerDay.defaultProps = {
  flexDirection: 'column',
  padding: 3
};

export default StyledDatePickerDay;
