import { ReactNode } from 'react';

import { FlexProps } from 'components/Flex';

interface TableTotalResultsRenderProps {
	totalResults: number;
}

export type TableTotalResultsProps<T extends React.ElementType = 'div'> = FlexProps<T> & {
	readonly render: (props: TableTotalResultsRenderProps) => ReactNode;
};
export type StyledTableTotalResultsProps<T extends React.ElementType = 'div'> = FlexProps<T>;
