import React from 'react';
import { DecoratorFn } from '@storybook/react';

import { Flex } from '@sergiogc9/react-ui';

const SelectDecorator: DecoratorFn = story => {
	const { minHeight } = story().props as any;

	if (!minHeight) return story();
	return <Flex minHeight={minHeight}>{story()}</Flex>;
};

export default SelectDecorator;
