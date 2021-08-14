import React from 'react';
import { DecoratorFn } from '@storybook/react';

import { Box } from '@sergiogc9/react-ui';

const LoadingBarDecorator: DecoratorFn = story => {
	return (
		<Box height="100%" left={0} position="absolute" top={0} width="100%">
			{story()}
		</Box>
	);
};

export default LoadingBarDecorator;
