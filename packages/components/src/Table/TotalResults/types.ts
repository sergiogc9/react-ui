import { ReactNode } from 'react';

import { FlexProps } from 'components/Flex';

interface TableTotalResultsRenderProps {
	totalResults: number;
}

export interface TableTotalResultsProps extends FlexProps<React.HTMLAttributes<HTMLDivElement>, undefined> {
	readonly render: (props: TableTotalResultsRenderProps) => ReactNode;
}
export interface StyledTableTotalResultsProps extends FlexProps<React.HTMLAttributes<HTMLDivElement>, undefined> {}
