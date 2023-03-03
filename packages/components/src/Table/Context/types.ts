import { Row, Table } from '@tanstack/react-table';

export interface TableContextData<Data extends Record<string, unknown>> {
	onRowClick?: (row: Row<Data>) => void;
	rowsCount?: number;
	table: Table<Data>;
}
