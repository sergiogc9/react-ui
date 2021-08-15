import { TableInstance } from 'react-table';
import { TableProps } from '../types';

export type TableContextData<Data extends Record<string, unknown>> = {
	rowsCount?: TableProps<Data>['rowsCount'];
	tableInstance: TableInstance<Data>;
};
