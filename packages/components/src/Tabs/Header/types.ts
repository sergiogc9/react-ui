import { PropsWithChildren } from 'react';

import { FlexProps } from 'components/Flex';

export interface TabsHeaderProps
	extends PropsWithChildren<FlexProps<React.HTMLAttributes<HTMLDivElement>, undefined>> {}
