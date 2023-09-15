import { FlexProps } from 'components/Flex';

export type TablePaginationProps<T extends React.ElementType = 'div'> = FlexProps<T> & {
	/**
	 * Handler called when page is changed. Useful to control the table from outside.
	 * IMPORTANT: Even the table is uncontrolled, the table will change the page values itself. If using the manualPagination prop, you are responsible of updating the data.
	 */
	readonly onGoToPage?: (page: number) => void;
};
