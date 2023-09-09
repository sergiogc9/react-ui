import React from 'react';
import { Decorator } from '@storybook/react';

import { Flex } from '@sergiogc9/react-ui';

const LoadingBarDecorator: Decorator = story => {
	return (
		<Flex height="100%" left={0} position="absolute" top={0} width="100%">
			{story()}
		</Flex>
	);
};

export default LoadingBarDecorator;
