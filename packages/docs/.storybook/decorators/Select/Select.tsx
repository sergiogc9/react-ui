import React from 'react';
import { DecoratorFn } from '@storybook/react';

import { Box } from '@sergiogc9/react-ui';

const SelectDecorator: DecoratorFn = story => {
	const { minHeight } = story().props as any;

	if (!minHeight) return story();
	return <Box minHeight={minHeight}>{story()}</Box>;
};

export default SelectDecorator;
