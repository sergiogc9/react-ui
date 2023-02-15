import React from 'react';
import { UserMenuPopoverProps } from './Popover/types';

export interface UserMenuProps extends UserMenuPopoverProps {
	/**
	 * The container in which the UserMenu is appended
	 */
	readonly appendTo?: React.RefObject<HTMLElement>;

	/**
	 * Boolean to show the user menu as full screen in mobile devices
	 */
	readonly isMobileFullScreenEnabled?: boolean;

	/**
	 * Function to handle when the UserMenu is closed
	 */
	readonly onClose?: () => void;
}
