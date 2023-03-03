import { HeaderContext } from '@tanstack/react-table';

import { FlexProps } from 'components/Flex';

export interface TableHeaderCellDefaultProps
	extends FlexProps<React.HTMLAttributes<HTMLDivElement>, undefined>,
		HeaderContext<any, any> {}

export interface StyledTableHeaderCellDefaultProps extends FlexProps<React.HTMLAttributes<HTMLDivElement>, undefined> {
	readonly canSort: boolean;
}
export interface StyledTableHeaderCellDefaultContentProps
	extends FlexProps<React.HTMLAttributes<HTMLDivElement>, undefined> {}
