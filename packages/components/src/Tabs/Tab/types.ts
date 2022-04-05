import React from 'react';

import { FlexProps } from 'components/Flex';

type Props = {
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

export type TabsTabProps = Props & FlexProps;
export type StyledTabsTabProps = TabsTabProps & { activeID?: string };
