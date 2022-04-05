import { HeaderProps, ColumnInstance } from 'react-table';

import { FlexProps } from 'components/Flex';

export type TableHeaderCellProps = FlexProps & HeaderProps<any>;

export type StyledTableHeaderCellProps = FlexProps & {
	readonly canSort: ColumnInstance['canSort'];
};
export type StyledTableHeaderCellContentProps = FlexProps;
