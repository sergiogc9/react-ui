import React from 'react';
import { Decorator } from '@storybook/react';
import { keyframes } from 'styled-components';

import { Animation, Button, Flex, Text, TextField } from '@sergiogc9/react-ui';

const AnimationDecorator: Decorator = (story, context) => {
	const [isEnabled, setIsEnabled] = React.useState(true);

	context.args.isEnabled = isEnabled;

	const onRestartAnimation = () => {
		setIsEnabled(false);
		setTimeout(() => setIsEnabled(true), 50);
	};

	return (
		<Flex alignItems="center" justifyContent="space-between" width="500px">
			{story(context)}
			<Button aspectSize="s" onClick={onRestartAnimation}>
				Restart animation
			</Button>
		</Flex>
	);
};

const appearAnimation = keyframes`
  from {
	  max-height:0;
	  opacity: 0;
  }

  to {
	  max-height: 50px;
	  opacity: 1;
  }
`;

const AnimationListDecorator: Decorator = (story, context) => {
	const [keys, setKeys] = React.useState([new Date().getTime(), new Date().getTime() + 1]);

	const [itemToRemove, setItemToRemove] = React.useState(1);

	const onAddItem = React.useCallback(() => {
		setKeys(currentKeys => [...currentKeys, new Date().getTime()]);
	}, []);

	const onRemoveItem = React.useCallback(() => {
		setKeys(currentKeys => [...currentKeys].filter((_, i) => i !== itemToRemove - 1));
		if (itemToRemove === keys.length) setItemToRemove(itemToRemove - 1);
	}, [itemToRemove, keys]);

	const children = React.useMemo(
		() =>
			keys.map(key => (
				<Animation.BaseAnimation animation={appearAnimation} key={key}>
					<Text color="primary.500">List item</Text>
				</Animation.BaseAnimation>
			)),
		[keys.length]
	);

	context.args.children = children;

	return (
		<Flex alignItems="center" flexDirection="column" justifyContent="space-between" minWidth="500px">
			{story(context)}
			<Button aspectSize="s" onClick={onAddItem} mt={3}>
				Add item
			</Button>
			<TextField
				aspectSize="s"
				label="Item to remove"
				min={1}
				max={keys.length}
				mt={3}
				onChange={ev => setItemToRemove(+ev.currentTarget.value)}
				value={itemToRemove}
				width="50%"
				type="number"
			/>
			<Button aspectSize="s" onClick={onRemoveItem} mt={3}>
				Remove item
			</Button>
		</Flex>
	);
};

export { AnimationListDecorator };
export default AnimationDecorator;
