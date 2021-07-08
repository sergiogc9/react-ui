import React from 'react';

import PopoverWrapper from '../Wrapper';
import { StyledPopover } from './styled';
import { PopoverContentProps } from './types';

const PopoverContent: React.FC<PopoverContentProps> = ({
	distance,
	duration = 250,
	enterDelay,
	exitDelay,
	isInteractive,
	isVisible,
	onMouseDown,
	onTouchStart,
	placement,
	reference,
	skidding,
	tippyProps,
	trigger,
	touch,
	zIndex,
	...rest
}) => {
	const onCustomMouseDown = React.useCallback<NonNullable<PopoverContentProps['onMouseDown']>>(
		event => {
			event.stopPropagation();
			if (onMouseDown) onMouseDown(event);
		},
		[onMouseDown]
	);

	const onCustomTouchStart = React.useCallback<NonNullable<PopoverContentProps['onTouchStart']>>(
		event => {
			event.stopPropagation();
			if (onTouchStart) onTouchStart(event);
		},
		[onTouchStart]
	);

	return (
		<PopoverWrapper
			distance={distance}
			duration={duration}
			enterDelay={enterDelay}
			exitDelay={exitDelay}
			isInteractive={isInteractive}
			isVisible={isVisible}
			placement={placement}
			reference={reference}
			skidding={skidding}
			tippyProps={tippyProps}
			trigger={trigger}
			touch={touch}
			zIndex={zIndex}
			render={(attrs, isPopoverVisible) => (
				<StyledPopover
					duration={duration}
					isVisible={isPopoverVisible}
					{...rest}
					{...attrs}
					onMouseDown={onCustomMouseDown}
					onTouchStart={onCustomTouchStart}
				/>
			)}
		/>
	);
};

export default React.memo(PopoverContent);
