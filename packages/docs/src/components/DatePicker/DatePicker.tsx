import React from 'react';
import styled from 'styled-components';

import { Button, DatePicker, DatePickerPopoverProps, Flex } from '@sergiogc9/react-ui';

const HolidaysModifierWrapper = styled(Flex)`
	.DayPicker-Day--holidays:not(.DayPicker-Day--selected) {
		color: green;
		font-weight: bold;

		&:hover {
			background: rgba(60, 179, 113, 0.4);
		}
	}
`;

const DatePickerWithPopoverStory = (props: Partial<DatePickerPopoverProps>) => {
	const [isVisible, setIsVisible] = React.useState(false);
	const btnRef = React.useRef<HTMLButtonElement>(null);

	return (
		<>
			<Button ref={btnRef} onClick={() => setIsVisible(true)}>
				Select a date
			</Button>
			<DatePicker.Popover datePickerProps={props} isVisible={isVisible} reference={btnRef}>
				<Flex justifyContent="flex-end" padding={3}>
					<Button aspectSize="s" onClick={() => setIsVisible(false)} variant="subtle">
						Cancel
					</Button>
					<Button aspectSize="s" ml={3} onClick={() => setIsVisible(false)} variant="default">
						Done
					</Button>
				</Flex>
			</DatePicker.Popover>
		</>
	);
};

export { DatePickerWithPopoverStory, HolidaysModifierWrapper };
