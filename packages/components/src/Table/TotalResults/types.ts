import { ReactNode } from 'react';

import { FlexProps } from 'components/Flex';

type TableTotalResultsRenderProps = {
	totalResults: number;
};

type Props = {
	readonly render: (props: TableTotalResultsRenderProps) => ReactNode;
};

export type TableTotalResultsProps = Props & FlexProps;
export type StyledTableTotalResultsProps = FlexProps;
