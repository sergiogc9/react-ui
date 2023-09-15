import React from 'react';

import { FlexProps } from 'components/Flex';

import { TabsProps } from '../types';

export type TabsTabProps<T extends React.ElementType = 'div'> = FlexProps<T> & {
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
};

export type StyledTabsTabProps<T extends React.ElementType = 'div'> = TabsTabProps<T> &
	Required<Pick<TabsProps, 'tabsLayout'>> & {
		activeID?: string;
	};
