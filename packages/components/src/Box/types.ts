import React from 'react';

import { BaseComponent, BaseComponentProps } from 'components/types';
import { ComposedBoxProps } from 'components/private/utils/composers/types';

type BoxProps<T extends React.ElementType = 'div'> = BaseComponentProps<T, ComposedBoxProps>;

type BoxComponent = BaseComponent<
	<T extends React.ElementType = keyof JSX.IntrinsicElements>(
		props: BoxProps<T>
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	) => React.ReactElement<BoxProps<T>, any> | null
>;

export { BoxComponent, BoxProps };
