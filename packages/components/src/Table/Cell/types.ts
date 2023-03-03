import { CellContext } from '@tanstack/react-table';

import { FlexProps } from 'components/Flex';

export interface TableCellProps
	extends CellContext<any, any>,
		FlexProps<React.HTMLAttributes<HTMLDivElement>, undefined> {}
