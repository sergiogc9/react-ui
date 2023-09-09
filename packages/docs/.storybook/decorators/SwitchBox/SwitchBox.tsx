import React from 'react';
import { Decorator } from '@storybook/react';
import { Flex } from '@sergiogc9/react-ui';

const SwitchBoxDecorator: Decorator = (story, context) => {
	return (
		<Flex ml={{ xs: -3, md: 0 }} p={4}>
			{story(context)}
		</Flex>
	);
};

export default SwitchBoxDecorator;
