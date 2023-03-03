import { CellContext } from '@tanstack/react-table';

import { TextProps } from 'components/Text';

export interface TableCellTextProps
	extends CellContext<any, any>,
		TextProps<React.HTMLAttributes<HTMLSpanElement>, undefined> {}
