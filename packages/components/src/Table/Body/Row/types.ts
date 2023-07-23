import { FlexProps } from 'components/Flex';

import { TableContentProps } from '../../Content';

export interface TableBodyRowProps
	extends FlexProps<React.HTMLAttributes<HTMLDivElement>, undefined>,
		Pick<TableContentProps, 'showAllBorders'> {}
