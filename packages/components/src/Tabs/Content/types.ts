import { PropsWithChildren } from 'react';

import { FlexProps } from 'components/Flex';

export interface TabsContentProps
	extends PropsWithChildren<FlexProps<React.HTMLAttributes<HTMLDivElement>, undefined>> {
	/**
	 * The id of the content
	 */
	readonly id: string;
}
