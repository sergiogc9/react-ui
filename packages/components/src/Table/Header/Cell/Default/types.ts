import { HeaderContext } from '@tanstack/react-table';

import { FlexProps } from 'components/Flex';

export type TableHeaderCellDefaultProps<T extends React.ElementType = 'div'> = FlexProps<T> & HeaderContext<any, any>;

export type StyledTableHeaderCellDefaultProps<T extends React.ElementType = 'div'> = FlexProps<T> & {
	readonly canSort: boolean;
};
export type StyledTableHeaderCellDefaultContentProps<T extends React.ElementType = 'div'> = FlexProps<T>;
