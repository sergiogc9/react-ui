import React from 'react';

import { FlexProps } from 'components/Flex';
import { SelectProps } from 'components/Select/types';

export interface SelectOptionProps extends FlexProps<React.HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
	/**
	 * The option id or value
	 */
	readonly id: string;
}
export interface StyledSelectOptionProps extends SelectOptionProps, Pick<SelectProps, 'aspectSize' | 'variant'> {
	isSelected: boolean;
}
