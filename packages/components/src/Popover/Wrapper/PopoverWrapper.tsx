import React from 'react';
import Tippy from '@tippyjs/react/headless';
import theme from '@sergiogc9/react-ui-theme';

import PopoverContext from '../Context';
import { PopoverWrapperProps } from './types';

const translateSkidding = (skidding: PopoverWrapperProps['skidding'], placement: PopoverWrapperProps['placement']) => {
	switch (placement) {
		case 'top-end':
		case 'bottom-end':
		case 'left-end':
		case 'right-end':
			return skidding!;
		case 'bottom-start':
		case 'top-start':
		case 'left-start':
		case 'auto-end':
			return -Math.abs(skidding!);
		default:
			return 0;
	}
};

const PopoverWrapper: React.FC<PopoverWrapperProps> = ({
	distance = 8,
	duration = 200,
	enterDelay = 0,
	exitDelay = 0,
	isInteractive = false,
	isVisible,
	placement = 'top-start',
	reference,
	render,
	skidding,
	tippyProps,
	trigger = 'mouseenter focus',
	touch = true,
	zIndex = theme.zIndices.popover
}) => {
	const [isTippyVisible, setIsTippyVisible] = React.useState(!!isVisible);

	const { popoverRef } = React.useContext(PopoverContext);

	const popoverContentRef = React.useRef<HTMLElement>(null);

	const popoverPlacement = popoverContentRef.current
		? (popoverContentRef.current.getAttribute('data-placement') as PopoverWrapperProps['placement'])
		: undefined;

	return (
		<Tippy
			animation
			appendTo={document.body}
			delay={[enterDelay, exitDelay]}
			duration={duration}
			interactive={isInteractive}
			offset={[translateSkidding(skidding, popoverPlacement || placement), distance]}
			onHide={({ state, unmount }) => {
				setIsTippyVisible(false);
				setTimeout(() => {
					if (!state.isDestroyed) unmount();
				}, duration);
			}}
			onMount={() => setIsTippyVisible(true)}
			placement={placement}
			render={attrs => render(attrs, isTippyVisible, popoverContentRef)}
			reference={reference || popoverRef}
			trigger={isVisible === undefined ? trigger : undefined}
			touch={touch}
			visible={isVisible}
			zIndex={zIndex}
			{...tippyProps}
		/>
	);
};

export default React.memo(PopoverWrapper);
