import { CellProps } from 'react-table';

import { FlexProps } from 'components/Flex';

export interface TableCellProps extends CellProps<any>, FlexProps<React.HTMLAttributes<HTMLDivElement>, undefined> {}
