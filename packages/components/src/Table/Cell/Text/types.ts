import { CellContext } from '@tanstack/react-table';

import { TextProps } from 'components/Text';

export type TableCellTextProps<T extends React.ElementType = 'span'> = TextProps<T> & CellContext<any, any>;
