import { CellContext } from '@tanstack/react-table';

import { FlexProps } from 'components/Flex';

export interface TableCellProps<T> extends CellContext<T, any>, FlexProps<'div'> {}
