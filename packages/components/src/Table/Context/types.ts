import { Row, TableInstance } from 'react-table';
import { TableProps } from '../types';

export type TableContextData<Data extends Record<string, unknown>> = {
	onRowClick?: (row: Row<Data>) => void;
	rowsCount?: TableProps<Data>['rowsCount'];
	tableInstance: TableInstance<Data>;
};
