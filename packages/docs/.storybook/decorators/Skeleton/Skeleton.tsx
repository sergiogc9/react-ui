import React from 'react';
import { DecoratorFn } from '@storybook/react';

import { Box } from '@sergiogc9/react-ui';

const SkeletonDecorator: DecoratorFn = story => {
	return <Box width={500}>{story()}</Box>;
};

export default SkeletonDecorator;
