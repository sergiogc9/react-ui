import { HeaderContext } from '@tanstack/react-table';

import { FlexProps } from 'components/Flex';

export interface TableFilterCellDefaultProps
	extends FlexProps<React.HTMLAttributes<HTMLDivElement>, undefined>,
		Pick<HeaderContext<any, any>, 'column'> {}
