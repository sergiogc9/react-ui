import { CellProps } from 'react-table';

import { TextProps } from 'components/Text';

export interface TableCellTextProps
	extends CellProps<any>,
		TextProps<React.HTMLAttributes<HTMLSpanElement>, undefined> {}
