import React from 'react';

import { TextProps } from 'components/Text';
import { ChipProps } from '../types';

export interface ChipLabelProps extends TextProps<React.HTMLAttributes<HTMLSpanElement>, undefined> {
	/**
	 * Choose one size
	 */
	readonly aspectSize?: ChipProps['aspectSize'];
	/**
	 * Choose the color variant
	 */
	readonly variant?: ChipProps['variant'];
}
