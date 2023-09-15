import { HeaderContext } from '@tanstack/react-table';

import { FlexProps } from 'components/Flex';

export type TableFilterCellDefaultProps<T extends React.ElementType = 'div'> = FlexProps<T> &
	Pick<HeaderContext<any, any>, 'column'>;
