import React, { useMemo } from 'react';

import Text from 'components/Text';

import { StyledCounter } from './styled';
import { CounterProps } from './types';

const Counter: React.FC<CounterProps> = React.forwardRef(({ numberOfItems = 0, variant = 'grey', ...rest }, ref) => {
	const count = useMemo(() => {
		return numberOfItems < 999 ? numberOfItems : '+999';
	}, [numberOfItems]);

	if (!numberOfItems) return null;

	return (
		<StyledCounter ref={ref} variant={variant} {...rest}>
			<Text aspectSize="xs" mx={1}>
				{count}
			</Text>
		</StyledCounter>
	);
});

export default React.memo(Counter);
