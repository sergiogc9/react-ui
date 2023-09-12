import React from 'react';
import { Decorator } from '@storybook/react';

import { Box, Flex } from '@sergiogc9/react-ui';

const SkeletonDecorator: Decorator = story => {
	return (
		<Box bg="common.background" px={4} py={4} width="100%">
			<Flex width={500}>{story()}</Flex>
		</Box>
	);
};

export default SkeletonDecorator;
