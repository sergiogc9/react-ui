import React from 'react';
import { Decorator } from '@storybook/react';

import { Avatar, Flex } from '@sergiogc9/react-ui';

const UserMenuDecorator: Decorator = (story, context) => {
	const avatarRef = React.useRef(null);

	const newContext = {
		...context,
		args: {
			...context.args,
			reference: avatarRef
		}
	};

	return (
		<>
			<Flex cursor="pointer" ref={avatarRef}>
				<Avatar src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80" />
			</Flex>
			{story(newContext)}
		</>
	);
};

export default UserMenuDecorator;
