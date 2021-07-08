import React from 'react';

import { StyledComponentProps } from 'components/types';
import { ComposedBoxProps } from 'components/private/utils/composers/types';

export type BoxProps<
	Attrs extends React.HTMLAttributes<any> = React.HTMLAttributes<HTMLDivElement>,
	Ref = any
> = StyledComponentProps<ComposedBoxProps, Attrs, Ref>;
