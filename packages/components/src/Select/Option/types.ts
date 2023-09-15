import React from 'react';

import { SelectProps } from 'components/Select/types';
import { ExtendedFlexComponent, ExtendedFlexProps } from 'components/types';

type Props = {
	/**
	 * The option id or value
	 */
	readonly id: string;
};

type SelectOptionProps<T extends React.ElementType = 'li'> = ExtendedFlexProps<Props, T>;

type SelectOptionComponent = ExtendedFlexComponent<Props>;

interface StyledSelectOptionProps extends SelectOptionProps, Pick<SelectProps, 'aspectSize' | 'variant'> {
	isSelected: boolean;
}

export { SelectOptionComponent, SelectOptionProps, StyledSelectOptionProps };
