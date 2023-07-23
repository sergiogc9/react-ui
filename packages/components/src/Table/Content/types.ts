import { Row } from '@tanstack/react-table';

import { FlexProps } from 'components/Flex';

import { TableBodyRowProps } from '../Body/Row/types';

export interface TableContentProps extends FlexProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	/**
	 * A function to customize the row styles
	 * @param row: The Row to customize
	 * @returns An object containing the props for the TableContentRow. Use the `css` prop to use more customizable styles with css() from styled-components or styled-system.
	 */
	rowProps?: <T>(row: Row<T>) => Omit<TableBodyRowProps, 'cursor' | 'onClick' | 'showAllBorders'>;
	/**
	 * Show or hide the borders between rows.
	 */
	showAllBorders?: boolean;
}
