import React from 'react';
import { DecoratorFn } from '@storybook/react';

import { Avatar, Box } from '@sergiogc9/react-ui';

const DropdownMenuDecorator: DecoratorFn = (story, context) => {
	const avatarRef = React.useRef();

	const newContext = {
		...context,
		args: { ...context.args, reference: avatarRef }
	};

	return (
		<>
			<Box cursor="pointer" ref={avatarRef}>
				<Avatar src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80" />
			</Box>
			{story(newContext)}
		</>
	);
};

export default DropdownMenuDecorator;