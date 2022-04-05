import React from 'react';
import { DecoratorFn } from '@storybook/react';

import { Flex, IconButton, Icon } from '@sergiogc9/react-ui';

const ActionMenuDecorator: DecoratorFn = (story, context) => {
	const iconRef = React.useRef();

	const newContext = {
		...context,
		args: { ...context.args, reference: iconRef }
	};

	return (
		<>
			<Flex ref={iconRef}>
				<IconButton>
					<Icon icon="kebab-vertical" styling="outlined" />
				</IconButton>
			</Flex>
			{story(newContext)}
		</>
	);
};

export default ActionMenuDecorator;
