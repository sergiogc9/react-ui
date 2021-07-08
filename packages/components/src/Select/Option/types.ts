import React from 'react';

import { BoxProps } from 'components/Box';
import { SelectProps } from 'components/Select/types';

type Props = {
	/**
	 * The option id or value
	 */
	readonly id: string;
};

export type SelectOptionProps = Props & BoxProps<React.HTMLAttributes<HTMLLIElement>>;
export type StyledSelectOptionProps = SelectOptionProps &
	Pick<SelectProps, 'aspectSize' | 'variant'> & { isSelected: boolean };
