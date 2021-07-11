import React from 'react';
import { useIsScrolled } from '@sergiogc9/react-hooks';

import Box from '..';
import { ScrollBoxProps } from './types';

const ScrollBox: React.FC<ScrollBoxProps> = props => {
	const { children, ...rest } = props;

	const scrollContentRef = React.useRef(null);
	const { hasScroll, percentage } = useIsScrolled(scrollContentRef);

	return (
		<Box
			borderBottomColor={hasScroll && percentage !== 100 ? 'neutral.100' : 'transparent'}
			borderBottomStyle="solid"
			borderWidth={{ xs: 0, lg: 1 }}
			borderTopColor={hasScroll && percentage !== 0 ? 'neutral.100' : 'transparent'}
			borderTopStyle="solid"
			flexDirection="column"
			overflowY="auto"
			ref={scrollContentRef}
			transition="border ease-in 0.15s"
			{...rest}
		>
			{children}
		</Box>
	);
};

export default React.memo(ScrollBox);
