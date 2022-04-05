import { PropsWithChildren } from 'react';

import { FlexProps } from 'components/Flex';

export type Props = {
	/**
	 * The children of the content
	 */
	readonly children?: React.ReactNode;
	/**
	 * The id of the content
	 */
	readonly id: string;
};

export type TabsContentProps = PropsWithChildren<Props & FlexProps>;
