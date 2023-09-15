import React from 'react';

import Flex from 'components/Flex';
import PopoverContext from '../Context';
import { PopoverTriggerProps } from './types';

const PopoverTrigger: React.FC<PopoverTriggerProps> = ({ children, ...props }) => {
	const { popoverRef } = React.useContext(PopoverContext);

	return (
		<Flex ref={popoverRef} width="min-content" {...(props as any)}>
			{children}
		</Flex>
	);
};

export default React.memo(PopoverTrigger);
