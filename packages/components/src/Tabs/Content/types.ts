import { PropsWithChildren } from 'react';

import { FlexProps } from 'components/Flex';

export interface TabsContentProps extends PropsWithChildren<FlexProps<'div'>> {
	/**
	 * The id of the content
	 */
	readonly id: string;
}
