import React from 'react';

import PopoverWrapper from '../Wrapper';
import { StyledPopover } from './styled';
import { PopoverContentProps } from './types';

const PopoverContent: React.FC<PopoverContentProps> = ({
	children,
	distance,
	duration = 250,
	enterDelay,
	exitDelay,
	isBlur = false,
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
			render={(attrs, isPopoverVisible, isHidden) => (
				<StyledPopover
					duration={duration}
					isBlur={isBlur}
					isVisible={isPopoverVisible}
					{...rest}
					{...attrs}
					onMouseDown={onCustomMouseDown}
					onTouchStart={onCustomTouchStart}
				>
					{!isHidden && children}
				</StyledPopover>
			)}
		/>
	);
};

export default React.memo(PopoverContent);
