import React from 'react';

import Content from 'components/Content';
import Popover from 'components/Popover';
import { StyledArrow, StyledTooltip } from './styled';
import { TooltipContentProps } from './types';

const TooltipContent: React.FC<TooltipContentProps> = ({
	arrow = true,
	children,
	arrowSize = 12,
	distance = 16,
	duration,
	enterDelay,
	exitDelay = 200,
	isInteractive,
	isVisible,
	reference,
	placement,
	skidding = 12,
	tippyProps,
	trigger,
	touch,
	variant = 'dark',
	zIndex,
	...rest
}) => {
	const tooltipContent = React.useMemo(() => {
		if (typeof children === 'string')
			return (
				<Content fontSize={1} lineHeight={0}>
					{children}
				</Content>
			);

		return children;
	}, [children]);

	return (
		<Popover.Wrapper
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
			render={(attrs, isPopoverVisible, ref) => (
				<StyledTooltip
					duration={duration}
					isVisible={isPopoverVisible}
					ref={ref}
					variant={variant}
					{...rest}
					{...attrs}
				>
					{tooltipContent}
					{arrow && (
						<StyledArrow
							arrow={arrow}
							arrowSize={arrowSize}
							bg={rest.bg}
							data-popper-arrow=""
							data-placement={attrs['data-placement']}
							placement={attrs['data-placement']}
							variant={variant}
						/>
					)}
				</StyledTooltip>
			)}
		/>
	);
};

export default React.memo(TooltipContent);
