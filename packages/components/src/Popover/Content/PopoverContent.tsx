import React from 'react';

import PopoverWrapper from '../Wrapper';
import { StyledPopover } from './styled';
import { TestFakeStyledPopoverContent } from './tests';
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

	// This is a kind of mock needed to improve tests performance and avoid tests to last many seconds when using animations
	if (typeof jest !== 'undefined' && !(window as any).useAnimationsInTests) {
		return (
			<TestFakeStyledPopoverContent
				duration={duration}
				isBlur={isBlur}
				isVisible={isVisible}
				tippyProps={tippyProps}
				{...rest}
				onMouseDown={onCustomMouseDown}
				onTouchStart={onCustomTouchStart}
				transition="unset"
			>
				{children}
			</TestFakeStyledPopoverContent>
		);
	}

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
					isBlur={isBlur}
					isVisible={isPopoverVisible}
					{...rest}
					{...attrs}
					onMouseDown={onCustomMouseDown}
					onTouchStart={onCustomTouchStart}
				>
					{children}
				</StyledPopover>
			)}
		/>
	);
};

const MemoizedPopoverContent: React.FC<PopoverContentProps> = React.memo(PopoverContent);

export default MemoizedPopoverContent;
