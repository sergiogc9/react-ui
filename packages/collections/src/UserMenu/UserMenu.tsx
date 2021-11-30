import React from 'react';

import Responsive, { ResponsiveBreakPoints } from 'collections/private/components/Responsive';

import UserMenuFullScreen from './FullScreen';
import UserMenuPopover from './Popover';
import { UserMenuProps } from './types';
import UserMenuContext, { UserMenuContextData } from './Context';

const UserMenu: React.FC<UserMenuProps> = ({
	appendTo,
	children,
	isMobileFullScreenEnabled = true,
	isVisible,
	onClose,
	tippyProps,
	...rest
}) => {
	const breakpoints = React.useMemo<Record<'popover' | 'fullscreen', ResponsiveBreakPoints>>(() => {
		if (isMobileFullScreenEnabled) return { popover: ['md', 'lg', 'xl'], fullscreen: 'mobile' };

		return { popover: ['xs', 'sm', 'md', 'lg', 'xl'], fullscreen: [] };
	}, [isMobileFullScreenEnabled]);

	const contextData = React.useMemo<UserMenuContextData>(
		() => ({
			isMobileFullScreenEnabled
		}),
		[isMobileFullScreenEnabled]
	);

	const tippyPropsPopover = React.useMemo(() => {
		return onClose
			? {
					...tippyProps,
					appendTo: appendTo?.current ?? document.body,
					onClickOutside: onClose
			  }
			: { ...tippyProps, appendTo: appendTo?.current ?? document.body };
	}, [appendTo, onClose, tippyProps]);

	return (
		<UserMenuContext.Provider value={contextData}>
			<Responsive visibility={breakpoints.popover}>
				<UserMenuPopover isVisible={isVisible} tippyProps={tippyPropsPopover} {...rest}>
					{children}
				</UserMenuPopover>
			</Responsive>
			<Responsive visibility={breakpoints.fullscreen}>
				<UserMenuFullScreen appendTo={appendTo} isVisible={isVisible} onClose={onClose} {...rest}>
					{children}
				</UserMenuFullScreen>
			</Responsive>
		</UserMenuContext.Provider>
	);
};

export default React.memo(UserMenu);
