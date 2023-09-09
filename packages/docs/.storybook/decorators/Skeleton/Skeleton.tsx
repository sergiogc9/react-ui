import React from 'react';
import { Decorator } from '@storybook/react';

import { Flex } from '@sergiogc9/react-ui';

const SkeletonDecorator: Decorator = story => {
	return <Flex width={500}>{story()}</Flex>;
};

export default SkeletonDecorator;
