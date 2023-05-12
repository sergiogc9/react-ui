import TableCellDate, { TableCellDateProps } from './Date';
import TableCellDefault, { TableCellDefaultProps } from './Default';
import TableCellText, { TableCellTextProps } from './Text';
import { TableCellProps } from './types';

export type { TableCellProps, TableCellDateProps, TableCellDefaultProps, TableCellTextProps };
export default {
	Date: TableCellDate,
	Default: TableCellDefault,
	Text: TableCellText
};
