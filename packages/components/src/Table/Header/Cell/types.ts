import { HeaderProps, ColumnInstance } from 'react-table';

import { FlexProps } from 'components/Flex';

export interface TableHeaderCellProps
	extends FlexProps<React.HTMLAttributes<HTMLDivElement>, undefined>,
		HeaderProps<any> {}

export interface StyledTableHeaderCellProps extends FlexProps<React.HTMLAttributes<HTMLDivElement>, undefined> {
	readonly canSort: ColumnInstance['canSort'];
}
export interface StyledTableHeaderCellContentProps extends FlexProps<React.HTMLAttributes<HTMLDivElement>, undefined> {}
