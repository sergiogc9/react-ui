import React from 'react';

import { BoxProps } from 'components/Box';

export type FlexProps<
	Attrs extends React.HTMLAttributes<any> = React.HTMLAttributes<HTMLDivElement>,
	Ref = any
> = BoxProps<Attrs, Ref>;
