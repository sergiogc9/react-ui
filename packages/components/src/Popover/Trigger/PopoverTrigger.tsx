import React from 'react';

import Box from 'components/Box';
import PopoverContext from '../Context';
import { PopoverTriggerProps } from './types';

const PopoverTrigger: React.FC<PopoverTriggerProps> = ({ children, ...props }) => {
	const { popoverRef } = React.useContext(PopoverContext);

	return (
		<Box ref={popoverRef} width="min-content" {...props}>
			{children}
		</Box>
	);
};

export default React.memo(PopoverTrigger) as React.FC<PopoverTriggerProps>;
