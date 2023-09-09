import React from 'react';
import { Decorator } from '@storybook/react';

import { Button, Flex } from '@sergiogc9/react-ui';

const DialogDecorator: Decorator = (story, context) => {
	const [isVisible, setIsVisible] = React.useState(false);

	const onCloseDialog = () => {
		setIsVisible(false);
	};

	context.args.isVisible = isVisible;
	context.args.onCancel = onCloseDialog;
	context.args.onConfirm = onCloseDialog;

	return (
		<Flex>
			{story(context)}
			<Button aspectSize="s" onClick={() => setIsVisible(true)}>
				Toggle dialog
			</Button>
		</Flex>
	);
};

export default DialogDecorator;
