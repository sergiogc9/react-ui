import React from 'react';
import { useMergeRefs } from '@sergiogc9/react-hooks';

import DatePicker, { DatePickerProps } from 'components/DatePicker';
import Icon from 'components/Icon';
import TextFieldBase from '../Base';
import { TextFieldDateProps } from './types';

const TextFieldDate: React.FC<TextFieldDateProps> = React.forwardRef(
	({ date, defaultDate, datePickerProps, inputProps, isDisabled, onClick, onDateChange, ...rest }, ref) => {
		const { locale = 'en-US' } = datePickerProps || {};

		const [inputDate, setInputDate] = React.useState(defaultDate);
		const [isPopoverVisible, setIsPopoverVisible] = React.useState(false);

		const innerRef = React.useRef<HTMLInputElement>(null);
		const mergeRefs = useMergeRefs(innerRef, ref);

		const onInputClicked = React.useCallback(() => {
			setIsPopoverVisible(true);
		}, []);

		const onRemoveBtnClicked = React.useCallback(() => {
			setInputDate(undefined);
			if (onDateChange) onDateChange();
		}, [onDateChange]);

		const inputValue = React.useMemo(() => {
			if (!date && !inputDate) return '';

			return (date ?? inputDate)!.toLocaleDateString(locale, {
				day: '2-digit',
				month: 'short',
				year: 'numeric'
			});
		}, [date, inputDate, locale]);

		const tippyProps = React.useMemo(
			() => ({
				onClickOutside: () => setIsPopoverVisible(false)
			}),
			[]
		);

		const finalDatePickerProps = React.useMemo<DatePickerProps>(
			() => ({
				defaultVisibleMonth: date ?? inputDate,
				...datePickerProps,
				date: date ?? inputDate,
				isRange: false,
				onDateChange: changedDate => {
					setIsPopoverVisible(false);
					setInputDate(changedDate);
					if (onDateChange) onDateChange(changedDate);
				}
			}),
			[date, datePickerProps, inputDate, onDateChange]
		);

		return (
			<>
				<TextFieldBase
					{...rest}
					data-testid="TextFieldDate"
					inputProps={{
						...inputProps,
						cursor: isDisabled ? 'default' : 'pointer',
						readOnly: true
					}}
					isDisabled={isDisabled}
					onClick={onInputClicked}
					onRemoveButtonClick={onRemoveBtnClicked}
					ref={mergeRefs}
					rightContent={<Icon icon="calendar" styling="outlined" />}
					type="text"
					value={inputValue}
				/>
				<DatePicker.Popover
					datePickerProps={finalDatePickerProps}
					isVisible={isPopoverVisible}
					reference={innerRef}
					tippyProps={tippyProps}
				/>
			</>
		);
	}
);

export default React.memo(TextFieldDate);
