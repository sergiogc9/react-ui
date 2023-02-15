import { FlexProps } from 'components/Flex';

export interface TablePaginationProps extends FlexProps<React.HTMLAttributes<HTMLDivElement>, undefined> {
	/**
	 * Handler called when page is changed. Useful to control the table from outside.
	 * IMPORTANT: Even the table is uncontrolled, the table will change the page values itself. If using the manualPagination prop, you are responsible of updating the data.
	 */
	readonly onGoToPage?: (page: number) => void;
}
