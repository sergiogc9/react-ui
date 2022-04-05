import React from 'react';

import Flex from 'components/Flex';
import Divider from 'components/Divider';
import DatePicker from 'components/DatePicker';
import StyledDatePickerPopover from './styled';
import { DatePickerPopoverProps } from './types';

const DatePickerPopover: React.FC<DatePickerPopoverProps> = ({ children, datePickerProps, ...rest }) => {
	return (
		<StyledDatePickerPopover {...rest}>
			<Flex>
				<DatePicker {...datePickerProps} />
			</Flex>
			<Divider marginTop={-2} />
			{children}
		</StyledDatePickerPopover>
	);
};

export default React.memo(DatePickerPopover);
