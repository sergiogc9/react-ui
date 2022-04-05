import React from 'react';

import { FlexProps } from 'components/Flex';
import { SelectProps } from 'components/Select/types';

type Props = {
	/**
	 * The option id or value
	 */
	readonly id: string;
};

export type SelectOptionProps = Props & FlexProps<React.HTMLAttributes<HTMLLIElement>>;
export type StyledSelectOptionProps = SelectOptionProps &
	Pick<SelectProps, 'aspectSize' | 'variant'> & { isSelected: boolean };
