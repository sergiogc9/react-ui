import { HeaderProps, ColumnInstance } from 'react-table';

import { BoxProps } from 'components/Box';

export type TableHeaderCellProps = BoxProps & HeaderProps<any>;

export type StyledTableHeaderCellProps = BoxProps & {
	readonly canSort: ColumnInstance['canSort'];
};
