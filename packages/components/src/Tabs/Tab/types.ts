import React from 'react';

import { FlexProps } from 'components/Flex';

import { TabsProps } from '../types';

export interface TabsTabProps extends FlexProps<React.HTMLAttributes<HTMLDivElement>, undefined> {
	/**
	 * The content of the tab
	 */
	readonly children?: React.ReactNode;
	/**
	 * The id of the tab
	 */
	readonly id: string;
	/**
	 * True if the current tab is disabled
	 */
	readonly isDisabled?: boolean;
	/**
	 * True if the current tab contains errors
	 */
	readonly isError?: boolean;
}
export interface StyledTabsTabProps extends TabsTabProps, Required<Pick<TabsProps, 'tabsLayout'>> {
	activeID?: string;
}
