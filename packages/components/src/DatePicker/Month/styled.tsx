import styled from 'styled-components';
import css from '@styled-system/css';

import Box from 'components/Box';
import { DatePickerMonthProps, StyledMonthBoxProps } from './types';

const StyledDatePickerMonth: React.FC<DatePickerMonthProps> = styled(Box)<DatePickerMonthProps>``;

StyledDatePickerMonth.defaultProps = {
	flexDirection: 'column',
	margin: 3
};

const StyledMonthBox: React.FC<StyledMonthBoxProps> = styled(Box)<StyledMonthBoxProps>`
	transition-property: background-color border-radius;
	transition-timing-function: ease-in;
	transition-duration: 0.2s;

	${props =>
		css({
			backgroundClip: 'content-box',
			borderRadius: props.theme.components.datePicker.month.borderRadius,
			fontSize: props.theme.components.datePicker.fontSize,
			height: props.theme.components.datePicker.month.height,
			padding: 1
		})}

	${props =>
		!props.isSelected &&
		!props.isDisabled &&
		css({
			'&:hover': {
				bg: props.theme.components.datePicker.colors.hover
			}
		})}

    ${props =>
		props.isToday &&
		css({
			bg: props.theme.components.datePicker.colors.todayBackground,
			color: props.theme.components.datePicker.colors.today
		})}

    ${props =>
		props.isToday &&
		props.isRange &&
		css({
			fontWeight: props.theme.fontWeights.bold
		})}

    ${props =>
		props.isSelected &&
		(props.isRange
			? css({
					borderRadius: '1px',
					bg: props.theme.components.datePicker.colors.hover,
					paddingX: 0
			  })
			: css({
					bg: props.theme.components.datePicker.colors.selected,
					color: 'neutral.0',
					fontWeight: props.theme.fontWeights.bold
			  }))}

    ${props =>
		props.isRangeStart &&
		css({
			bg: props.theme.components.datePicker.colors.selected,
			borderBottomLeftRadius: props.theme.components.datePicker.month.borderRadius,
			borderTopLeftRadius: props.theme.components.datePicker.month.borderRadius,
			color: 'neutral.0',
			fontWeight: props.theme.fontWeights.bold
		})}

    ${props =>
		props.isRangeEnd &&
		css({
			bg: props.theme.components.datePicker.colors.selected,
			borderBottomRightRadius: props.theme.components.datePicker.month.borderRadius,
			borderTopRightRadius: props.theme.components.datePicker.month.borderRadius,
			color: 'neutral.0',
			fontWeight: props.theme.fontWeights.bold
		})}


  ${props =>
		props.isDisabled &&
		css({
			color: props.theme.components.datePicker.colors.disabled,
			cursor: 'default'
		})}
`;

StyledMonthBox.defaultProps = {
	alignItems: 'center',
	cursor: 'pointer',
	justifyContent: 'center',
	width: '25%'
};

export { StyledMonthBox };
export default StyledDatePickerMonth;
