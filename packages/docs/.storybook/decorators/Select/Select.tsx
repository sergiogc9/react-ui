import React from 'react';
import { Decorator } from '@storybook/react';

import { Flex } from '@sergiogc9/react-ui';

const SelectDecorator: Decorator = story => {
	const { minHeight } = story().props as any;

	if (!minHeight) return story();
	return <Flex minHeight={minHeight}>{story()}</Flex>;
};

export default SelectDecorator;
