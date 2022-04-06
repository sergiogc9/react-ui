import React from 'react';

import { TextProps } from 'components/Text';
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

export type ChipLabelProps = Props & TextProps<React.HTMLAttributes<HTMLSpanElement>>;
