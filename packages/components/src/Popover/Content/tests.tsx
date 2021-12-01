import React from 'react';
import { useClickOutside, useMergeRefs } from '@sergiogc9/react-hooks';

import Box from 'components/Box';

import PopoverContext from '../Context';
import { PopoverContentProps } from './types';

const TestFakeStyledPopoverContent: React.FC<PopoverContentProps> = React.forwardRef((props, ref) => {
	const { children, isVisible, tippyProps, ...rest } = props;

	const [isPrivateVisible, setIsPrivateVisible] = React.useState(false);
	const { popoverRef } = React.useContext(PopoverContext);

	const innerRef = React.useRef<HTMLElement>(null);
	const mergeRefs = useMergeRefs(innerRef, ref);

	React.useEffect(() => {
		if (popoverRef.current) {
			popoverRef.current.addEventListener('click', () => setIsPrivateVisible(visible => !visible));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useClickOutside(innerRef, () => {
		if (tippyProps?.onClickOutside) tippyProps.onClickOutside({} as any, {} as any);
		setIsPrivateVisible(false);
	});

	return (
		<Box display={isVisible ?? isPrivateVisible ? 'flex' : 'none'} {...rest} ref={mergeRefs} transition="unset">
			{(isVisible ?? isPrivateVisible) && children}
		</Box>
	);
});

export { TestFakeStyledPopoverContent };
