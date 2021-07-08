import React from 'react';

import Box from 'components/Box';
import useClickOutside from 'components/private/utils/hooks/useClickOutside';
import useMergeRefs from 'components/private/utils/hooks/useMergeRefs';

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
