import React from 'react';
import { useClickOutside, useMergeRefs } from '@sergiogc9/react-hooks';

import Box from 'components/Box';

// Mocking popover component to drastically reduce test execution timing
const getPopoverContentMock = () => ({
	Content: React.forwardRef(({ children, isVisible, tippyProps, ...rest }: any, ref) => {
		const propOnClickOutside = tippyProps.onClickOutside;
		const innerRef = React.useRef<any>(null);
		const mergeRefs = useMergeRefs(innerRef, ref);
		useClickOutside(innerRef as any, propOnClickOutside || (() => {}));

		const styles = { display: isVisible ? 'flex' : 'none' };

		return (
			<Box {...rest} ref={mergeRefs} style={styles}>
				{children}
			</Box>
		);
	})
});

export { getPopoverContentMock };
