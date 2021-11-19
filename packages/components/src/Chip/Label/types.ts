import React from 'react';

import { ContentProps } from 'components/Content';
import { ChipProps } from '../types';

type Props = {
	/**
	 * Choose one size
	 */
	readonly aspectSize?: ChipProps['aspectSize'];
	/**
	 * Choose the color variant
	 */
	readonly variant?: ChipProps['variant'];
};

export type ChipLabelProps = Props & ContentProps<React.HTMLAttributes<HTMLSpanElement>>;
