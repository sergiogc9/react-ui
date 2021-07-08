import { LinkHTMLAttributes } from 'react';

import { BoxProps } from 'components/Box/types';

type Props = {
	/**
	 * Choose one size
	 */
	readonly aspectSize?: 's' | 'm';
	/**
	 * Choose the color variant
	 */
	readonly variant?: 'blue' | 'green' | 'grey' | 'red' | 'yellow' | 'white';
};

export type ChipGroupProps = Props & BoxProps<LinkHTMLAttributes<HTMLLinkElement>>;
