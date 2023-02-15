import { ComposedGridProps } from 'components/private/utils/composers/types';
import { FlexProps } from 'components/Flex';

export interface GridRowProps
	extends FlexProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
		ComposedGridProps {}
