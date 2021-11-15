import React from 'react';
import { DecoratorFn } from '@storybook/react';
import { Box } from '@sergiogc9/react-ui';

const SwitchBoxDecorator: DecoratorFn = (story, context) => {
	return (
		<Box ml={{ xs: -3, md: 0 }} p={4}>
			{story(context)}
		</Box>
	);
};

export default SwitchBoxDecorator;
